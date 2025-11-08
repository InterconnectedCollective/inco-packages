import { useState, useEffect } from "react";
import { BIOS } from "./bios";
import { useScreenSize } from "../../utils/Utils";

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

    useEffect(() => {
        const initialBios = getRandomBio();
        setRandomBio(initialBios);

        const intervalIds = initialBios.map((_, index) => {
            const randomDelay = 5000 + Math.random() * 5000;

            return setInterval(() => {
                setRandomBio((prevBios) => {
                    let newBio;
                    do {
                        newBio = BIOS[Math.floor(Math.random() * BIOS.length)];
                    } while (prevBios.some((b) => b.name === newBio.name));

                    const updated = [...prevBios];
                    updated[index] = newBio;
                    return updated;
                });
            }, randomDelay);
        });

        return () => intervalIds.forEach(clearInterval);
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
