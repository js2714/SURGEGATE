import React, { } from "react";
import './home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import background from './images/LAT.jpg'
export default function Home() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/land/medical');
    setUser(result.data);
  };

  const deleteTeam = async (dserialno) => {

    await axios.delete(`http://localhost:8080/land/${dserialno}`)
    loadUsers();
  };

  return (
    <div className="container">
      <nav className="navbar my-4 navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            All  Details
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to="/add-details">
            ADD DETAILS
          </Link>
        </div>
      </nav>

      <div className="py-4">
        <table className="table border dark shadow">
          <thead>
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Doctor Email</th>
              <th scope="col">Doctor Position</th>
              <th scope="col">Experience</th>
              {/* <th scope="col">totalnoofpass</th>
              <th scope="col">route</th>
              <th scope="col">busownership</th>
              <th scope="col">time</th> */}
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.dname}</td>
                <td>{user.demail}</td>
                <td>{user.dposition}</td>
                <td>{user.dexperience}</td>
                {/* <td>{user.total_no_of_passengers}</td>
                <td>{user.route}</td>
                <td>{user.busownership}</td>
                <td>{user.time}</td> */}
                <td>
                  <Link className="btn btn-outline-success mx-2" to={`/view-details/${user.dserialno}`}>
                    VIEW 
                  </Link>
                  {console.log(user.dserialno)}
                  <Link className="btn btn-outline-primary mx-2" to={`/edit-details/${user.dserialno}`}>
                    EDIT
                  </Link>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteTeam(user.dserailno)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}




