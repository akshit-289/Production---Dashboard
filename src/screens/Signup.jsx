import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    contact: ""
  })  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
       e.preventDefault();
       const response = await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name, email:credentials.email, password: credentials.password, contact: credentials.contact})
       })   

       const json = await response.json();
    //    console.log(json);

       if(!json.success){
         alert("Enter valid credentials");
       }
       else{
         alert("You have signed in successfully. Now login with your credentials to continue");
         navigate("/login");
       }
  }
  
  const handleChange = (event) => {
    setCredentials({...credentials, [event.target.name]:event.target.value})
  }

  return (
      <div>
          <section className="vh-100" style={{"backgroundColor": "#eee"}}>
              <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-lg-12 col-xl-11">
                          <div className="card text-black" style={{"borderRadius": "25px"}}>
                              <div className="card-body p-md-5">
                                  <div className="row justify-content-center">
                                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                          <form className="mx-1 mx-md-4">

                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                  <div className="form-outline flex-fill mb-0">
                                                      <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                                                      <input type="text" id="form3Example1c" className="form-control" name='name' value={credentials.name} onChange={handleChange} />
                                                  </div>
                                              </div>

                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                  <div className="form-outline flex-fill mb-0">
                                                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                      <input type="email" id="form3Example3c" className="form-control" name="email" value={credentials.email} onChange={handleChange}/>
                                                  </div>
                                              </div>

                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                  <div className="form-outline flex-fill mb-0">
                                                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                      <input type="password" id="form3Example4c" className="form-control" name="password" value={credentials.password} onChange={handleChange}  />
                                                  </div>
                                              </div>

                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                  <div className="form-outline flex-fill mb-0">
                                                      <label className="form-label" htmlFor="form3Example5c">Contact Number</label>
                                                      <input type="number" id="form3Example5c" className="form-control" name="contact" min="999999999" max="10000000000" value={credentials.contact} onChange={handleChange}  />
                                                  </div>
                                              </div>

                                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                  <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                                              </div>
                                          </form>
                                      </div>
                                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                              className="img-fluid" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Signup
