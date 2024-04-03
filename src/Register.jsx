import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./component/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "./Config";

const Register = () => {
  // console.log(Registerd);
  const {Registerd} =useContext(AuthContext)
  const handleSubmit =e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value
        // console.log(name);
        Registerd(email,password)
        .then((result)=>{
          // console.log(result);
          updateProfile(result.user,{
            displayName:name
          })
          .then(res=>{
            
          })
          .catch(error =>{
            console.log(error.message);
          })
          console.log(result);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
          // ..
          
        });
       
        
        
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            <p className="p-5">You have Already account? <button><Link to='/login'>Login</Link></button></p>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Register;