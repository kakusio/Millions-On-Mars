import * as React from "react";
import { Link } from "gatsby";

const pageWrapper = ({ Title, Items, TargetLink }) => {
  const onClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") window.history.back();
  };
  return (
    <main>
      <h1>
        {Title}
        <br />
      </h1>
      <p>
        <Link to="/">GO Home Page</Link>
      </p>
      <p>
        <button onClick={onClick}>Go Back</button>
      </p>
      <ul>
        {Object.keys(Items).map((key) => (
          <li key={key}>
            <span>{Items[key].display_name}</span> --{" "}
            {TargetLink && (
              <Link to={`${TargetLink}${key}`}>{TargetLink.split("?")[0]}</Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default pageWrapper;
