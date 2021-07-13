import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <div className="nav">
      <h1>Waves</h1>
      <div
        className="library-toggle"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        <button>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </div>
  );
};
export default Nav;
