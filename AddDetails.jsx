import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddDetails() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
  
    dserailno: "",
    dname: "",
    demail: "",
    dposition: "",
    dexperience: ""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {  dname,
    demail,
    dposition,
    dexperience } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9090/id",user);
    navigate('/main');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Doctor Name
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Doctor Name"
                name="dname"
                value={dname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              Doctor Email
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Doctor Email"
                name="demail"
                value={demail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Doctor Position
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Doctor position"
                name="dposition"
                value={dposition}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Doctor Experience
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Experience"
                name="dexperience"
                value={dexperience}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            
            <button type="submit" className="btn btn-outline-success my-2">
              Add Details
            </button>
            <Link className="btn btn-outline-danger my-2 mx-2" to={"/main"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
