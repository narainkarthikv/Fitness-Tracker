import React from 'react';
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="https://capable-pasca-47f9c1.netlify.app/">Fitness-Tracker</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <Link exact className="nav-link" to="/">Exercises</Link> */}
            <a className="nav-link" href="https://capable-pasca-47f9c1.netlify.app/">Exercises</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/create">Create Exercise Log</Link> */}
            <a className="nav-link" href="https://capable-pasca-47f9c1.netlify.app/create">Create Exercise Log</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/user">Create User</Link> */}
            <a className="nav-link" href="https://capable-pasca-47f9c1.netlify.app/user">Create User</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
