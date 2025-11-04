import { useState, useEffect } from "react";
import { BIOS } from "./bios";
import BioList from "./BioList";

const randomBioCards = () => {
  // console.debug("AboutPage");
  const getRandomBio = () => {
    const shuffledBios = [...BIOS].sort(() => 0.5 - Math.random())
    return shuffledBios.slice(0, 3);
  }

  const [readMoreShow, setReadMoreShow] = useState(false);
  const [randomBio, setRandomBio] = useState([]);

  const handleShow = () => setReadMoreShow(true);
  const handleHide = () => setReadMoreShow(false);

  useEffect(() => {
    const initialBios = getRandomBio();
    setRandomBio(initialBios);

    const timeoutIds = [];

    const scheduleNextBio = (index) => {
      const randomDelay = 6000 + Math.random() * 6000;
      const id = setTimeout(() => {
        setRandomBio((prevBios) => {
          let newBio;
          do {
            newBio = BIOS[Math.floor(Math.random() * BIOS.length)];
          } while (prevBios.some((b) => b.name === newBio.name));

          const updated = [...prevBios];
          updated[index] = newBio;
          return updated;
        });

        scheduleNextBio(index);
      }, randomDelay);

      timeoutIds.push(id);
    };

    initialBios.forEach((_, index) => scheduleNextBio(index));

    return () => timeoutIds.forEach(clearTimeout);
  }, []);
}

export default randomBioCards;