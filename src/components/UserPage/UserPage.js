import React from "react";
import "./UserPage.scss";
import { Link, useLocation } from "react-router-dom";

function UserPage() {
  const { state } = useLocation();
  return (
    <div className="UserPage">
      <h2>About Me</h2>
      <img src={state.avatar} alt=""></img>
      <h2>
        <b>Name: </b>
        {`${state.first_name} ${state.last_name}`}
      </h2>
      <h4>
        <b>Email: </b>
        {state.email}
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        praesentium ad quam, repudiandae asperiores magni unde nihil. Labore
        optio fugit voluptatum. Ullam qui consequatur optio dolorem blanditiis
        itaque soluta neque.
      </p>
      <Link to="/users">
        <button>Back to List</button>
      </Link>
    </div>
  );
}

export default UserPage;
