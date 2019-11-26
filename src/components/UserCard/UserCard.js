import React from "react";
import "./UserCard.scss";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      width: "450px",
      height: "200px",
      backgroundColor: this.props.color,
      color: "#ffffff",
      boxShadow: "1px 1px 5px black",
      margin: "15px 5px",
      display: "flex",
      justifyContent: "space-around",
      padding: "8px",
      borderRadius: "2px",
      position: "relative"
    };
    return (
      <div style={styles} className="UserCard" data-aos={this.props.animation}>
        <div className="Scarf">
          <img src={this.props.data.avatar} alt=""></img>
          <div className="UserCardDetails">
            <h2>
              <b>Name: </b>
              {`${this.props.data.first_name} ${this.props.data.last_name}`}
            </h2>
            <h4>
              <b>Email: </b>
              {this.props.data.email}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
