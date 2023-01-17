import { useState } from "react";

const useCVButton = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return { visible, setVisible, handleVisible };
};

export { useCVButton };
