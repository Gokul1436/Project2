// Login.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title header11 ">Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">

                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn11 btn-primary w-100">Continue</button>
                    <p className='paraaa'>Create an account?<spam ><Link>Click here</Link></spam></p>
                    <input
                      type="checkbox"  />
                    <label className="form">
                    <p className='paraaa'>By continuing, i agree to the terms of use & privacy policy.</p>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
