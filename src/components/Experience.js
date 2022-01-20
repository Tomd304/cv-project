import { Component } from "react";
import { ExperienceItem } from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.addClick = this.addClick.bind(this);
    this.removeSelf = this.removeSelf.bind(this);

    this.state = {
      counter: 0,
      expItems: [
        {
          identifier: 0,
          component: (
            <ExperienceItem
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
      expItems: [
        ...state.expItems,
        {
          identifier: state.counter,
          component: (
            <ExperienceItem
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
      expItems: state.expItems.filter((item) => item.identifier != identifier),
    }));
  }

  render() {
    return <div>{this.state.expItems.map((x) => x.component)}</div>;
  }
}

export { Experience };
