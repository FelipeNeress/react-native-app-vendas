import { useCallback, useState } from "react";

const Test = () => {
  const [name, setName] = useState("julio");
  const [lastName, setLastName] = useState("andrade");

  const handleChangename = useCallback(() => {
    setName(`gabriel ${lastName}`);
  }, [lastName]);

  const handChangeLastName = () => {
    setLastName("moreira");
  };

  <div>
    <button onClick={handleChangename}>nome</button>
    <button onClick={handChangeLastName}>sobre</button>
  </div>;
};

export default Test;
