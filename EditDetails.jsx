import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditDetails() {
  let navigate = useNavigate();
  const { dserialno } = useParams();
  console.log(dserialno);
  const [user, setUser] = useState({
    dserailno: "",
    dname: "",
    demail: "",
    dposition: "",
    dexperience: "",
   
  });

  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/land/medical/${dserialno}`);
    setUser(result.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {
    dname,
    demail,
    dposition,
    dexperience
   
  } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/land/id/${dserialno}`, user);
    navigate("/main");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Doctor Name
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Name"
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
                placeholder="Enter Eail"
                name="demail"
                value={demail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Doctor position
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Doctor Position"
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
                placeholder="Enter The End_Point"
                name="dexperience"
                value={dexperience}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn btn-primary my-2">
              Update Details
            </button>
            <Link className="btn btn-primary my-2 mx-2" to={"/main"}>
              Back to Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}