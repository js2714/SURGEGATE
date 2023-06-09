import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Main() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/bus');
    setUser(result.data);
  };

  const deleteTeam = async (busid) => {
    await axios.delete(`http://localhost:8080/busdel/${busid}`);
    loadUsers();
  };

  return (
    <div className="container">
      <nav className="navbar my-4 navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            All Bus Details
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
              <th scope="col">busid</th>
              <th scope="col">busname</th>
              <th scope="col">busnum</th>
              <th scope="col">startpoint</th>
              <th scope="col">endpoint</th>
              <th scope="col">dropspot</th>
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
                <td>{user.busname}</td>
                <td>{user.busnum}</td>
                <td>{user.startpoint}</td>
                <td>{user.endpoint}</td>
                <td>{user.placename}</td>
                {/* <td>{user.total_no_of_passengers}</td>
                <td>{user.route}</td>
                <td>{user.busownership}</td>
                <td>{user.time}</td> */}
                <td>
                  <Link className="btn btn-outline-success mx-2" to={`/view-details/${user.id}`}>
                    VIEW 
                  </Link>
                  {console.log(user.id)}
                  <Link className="btn btn-outline-primary mx-2" to={`/edit-details/${user.id}`}>
                    EDIT
                  </Link>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteTeam(user.id)}
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