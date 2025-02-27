import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./component/AuthProvider";



const Login = () => {
    const {signIn} = useContext(AuthContext)
    

    const handleSubmit =e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email,password)
        .then((result)=>{
          console.log(result)
        })
        .catch(error =>{
          console.log(error.message);
        })
    }
    const refEmail = useRef()
    const hanldeResetPass=()=>{
        const email = refEmail.current.value
        console.log(email);
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" ref={refEmail} name="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                <label className="label">
                  <Link onClick={hanldeResetPass} className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            <p className="p-5">You dont have account? <button><Link to='/register'>Register</Link></button></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;