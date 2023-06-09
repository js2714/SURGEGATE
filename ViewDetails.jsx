import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ViewDetails() {
// const {busid}
  const [user, setUser] = useState({
    dserialno: '',
    demail: '',
    dexperience: '',
    dname: '',
    dposition: ''
    
  });
  
  const {dserialno} = useParams();
  console.log(dserialno);


  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/land/medical/${dserialno}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">KIMS SURGEON's DETAILS</h2>

          <div className="card">
            <div className="card-header">
              Details Of The SURGEON's:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Dr_Serial no </b>
                  {user.dserialno}
                </li>
                <li className="list-group-item">
                  <b>Dr_Email: </b>
                  {user.demail}
                </li>
                <li className="list-group-item">
                  <b>Dr_experience: </b>
                  {user.dexperience}
                </li>
                <li className="list-group-item">
                  <b>Dr_Name: </b>
                  {user.dname}
                </li>
                <li className="list-group-item ">
                  <b>Dr_Position: </b>
                  {user.dposition}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/login"}>
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  );
}