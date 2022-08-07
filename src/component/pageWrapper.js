import * as React from "react";
import Link from 'gatsby-link';

const pageWrapper = ({ Title, Items, TargetLink }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.back();
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
          <li>
            <span>{Items[key].Name}</span> --{" "}
            {TargetLink && (
              <a href={`${TargetLink}${Items[key].Name}`}>
                {TargetLink.split("?")[0]}
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default pageWrapper;
