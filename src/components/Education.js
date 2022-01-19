import { Component } from "react";
import { EducationItem } from "./EducationItem";

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

export { Education };
