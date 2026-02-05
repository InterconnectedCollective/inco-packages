import { useState, useEffect, useRef } from "react";
import { BIOS } from "./bios";
import { useScreenSize } from "../../utils/Utils";

/** Component for AboutPage
 *
 * Props:
 * - bio: {
 *        photo,
 *        name
 * }
 *
 * State:
 * - randomBio: gets 1-3 bios depending on screen width
 * -switchTimeout: stores timeout ID for automatic switching between random bios
 *
 */

const RandomCards = () => {
    const screenSize = useScreenSize();

    const getRandomBio = () => {
        const shuffledBios = [...BIOS].sort(() => 0.5 - Math.random())
        if (screenSize.width < 800) {
            return shuffledBios.slice(0, 1);
        } else if (screenSize.width < 1300) {
            return shuffledBios.slice(0, 2);
        } else {
            return shuffledBios.slice(0, 3);
        }
    }

    const [randomBio, setRandomBio] = useState([]);
    const switchTimeout = useRef(null);

    useEffect(() => {
        const initialBios = getRandomBio();
        setRandomBio(initialBios);

        const switchOneCard = () => {
            setRandomBio((prevBios) => {
                if (prevBios.length === 0) return prevBios;

                const randomIndex = Math.floor(Math.random() * prevBios.length);

                let newBio;
                do {
                    newBio = BIOS[Math.floor(Math.random() * BIOS.length)];
                } while (prevBios.some((b) => b.name === newBio.name));

                const updated = [...prevBios];
                updated[randomIndex] = newBio;
                return updated;
            });

            const nextDelay = 3000 + 2000 + Math.random() * 5000;
            switchTimeout.current = setTimeout(switchOneCard, nextDelay);
        };

        switchTimeout.current = setTimeout(switchOneCard, 4000);

        return () => clearTimeout(switchTimeout.current);
    }, [screenSize.width]);

    return (
        <>
            {randomBio.map((bio) => (
                <div key={bio.name} className="Squiggle-biocard">
                    <div className="BioCard-purple">
                        <img
                            className="BioCard-headshot img-fluid"
                            src={bio.photo}
                            alt={bio.name}
                        />
                    </div>
                </div>
            ))}
        </>
    )
};

export default RandomCards;
