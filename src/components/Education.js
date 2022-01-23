import { EducationItem } from "./EducationItem";
import { useState } from "react";

const Education = () => {
  const [counter, setCounter] = useState(0);
  const [ids, setIds] = useState([0]);
  const createItem = (identifier) => {
    return (
      <EducationItem
        addClick={addClick}
        removeSelf={removeSelf}
        id={identifier}
        key={"item" + identifier}
      />
    );
  };

  const addClick = () => {
    setIds((oldIds) => [...oldIds, counter + 1]);
    setCounter(counter + 1);
  };
  const removeSelf = (event) => {
    console.log(event.target.dataset.identifier);
    setIds((oldIds) => oldIds.filter((id) => id != event.target.dataset.id));
  };
  console.log(ids);
  return ids.map((id) => createItem(id));
};

export { Education };

/* SAME COMPONENT BUT USING CLASS INSTEAD OF HOOKS / FUNCTIONS

import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.addClick = this.addClick.bind(this);
    this.removeSelf = this.removeSelf.bind(this);

    this.state = {
      counter: 0,
      edItems: [
        {
          identifier: 0,
          component: (
            <EducationItem
              key="item0"
              addClick={this.addClick}
              removeSelf={this.removeSelf}
              identifier={0}
            />
          ),
        },
      ],
    };
  }

  addClick() {
    this.state.counter++;
    this.setState((state) => ({
      edItems: [
        ...state.edItems,
        {
          identifier: state.counter,
          component: (
            <EducationItem
              key={"index" + state.counter}
              addClick={this.addClick}
              removeSelf={this.removeSelf}
              identifier={state.counter}
            />
          ),
        },
      ],
    }));
  }

  removeSelf(event) {
    const identifier = event.target.dataset.identifier;
    this.setState((state) => ({
      edItems: state.edItems.filter((item) => item.identifier != identifier),
    }));
  }

  render() {
    return <div>{this.state.edItems.map((x) => x.component)}</div>;
  }
}
*/
