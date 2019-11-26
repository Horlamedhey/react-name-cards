import React from "react";
import { Link } from "react-router-dom";
import "./UserCardList.scss";
import UserCard from "../UserCard/UserCard.js";

class UserCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#B34D4D",
        "#80B300",
        "#809900",
        "#E6B3B3",
        "#6680B3",
        "#66991A",
        "#FF99E6",
        "#CCFF1A",
        "#FF1A66",
        "#E6331A",
        "#33FFCC",
        "#66994D",
        "#B366CC",
        "#4D8000",
        "#B33300",
        "#CC80CC",
        "#66664D",
        "#991AFF",
        "#E666FF",
        "#4DB3FF",
        "#1AB399",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
        "#4D8066",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#9900B3",
        "#E64D66",
        "#4DB380",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF"
      ],
      animations: [
        "fade-up",
        "fade-down",
        "fade-right",
        "fade-up-right",
        "flip-left",
        "flip-right",
        "flip-up",
        "flip-down",
        "zoom-in",
        "zoom-in-down",
        "zoom-in-right",
        "zoom-out",
        "zoom-out-up"
      ]
    };
  }

  render() {
    return (
      <div className="UserCardList">
        {this.props.people.map((person, i) => (
          <Link
            to={{ pathname: `/users/${person.id}`, state: person }}
            key={`person-${i}`}
          >
            <UserCard
              data={person}
              color={this.state.colors[Math.ceil(Math.random() * 10)]}
              animation={this.state.animations[Math.ceil(Math.random() * 10)]}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default UserCardList;
