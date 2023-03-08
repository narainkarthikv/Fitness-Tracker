import React from 'react';
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">Fitness-Tracker</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <Link exact className="nav-link" to="/">Exercises</Link> */}
            <a className="nav-link" href="/">Exercises</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/create">Create Exercise Log</Link> */}
            <a className="nav-link" href="/create">Create Exercise Log</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/user">Create User</Link> */}
            <a className="nav-link" href="/user">Create User</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
