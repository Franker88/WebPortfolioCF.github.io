import { useState } from "react";

const useCarousel = () => {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState("");

  const handlePrevious = (length) => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setNext("Prev");
    setTimeout(() => {
      setNext("");
    }, 500);
  };

  const handleNext = (length) => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    setNext("Next");
    setTimeout(() => {
      setNext("");
    }, 500);
  };

  return { index, next, setIndex, setNext, handlePrevious, handleNext };
};

export { useCarousel };
