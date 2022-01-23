import { useState } from "react";
import { ExperienceItem } from "./ExperienceItem";

const Experience = () => {
  const [counter, setCounter] = useState(0);
  const [ids, setIds] = useState([0]);
  const addClick = () => {
    setIds((oldIds) => [...oldIds, counter + 1]);
    setCounter(counter + 1);
  };
  const removeSelf = (event) => {
    setIds((oldIds) => oldIds.filter((id) => id != event.target.dataset.id));
  };
  const createExperienceItem = (id) => {
    return (
      <ExperienceItem
        id={id}
        key={"item" + id}
        addClick={addClick}
        removeSelf={removeSelf}
      />
    );
  };
  return ids.map((id) => createExperienceItem(id));
};

export { Experience };
