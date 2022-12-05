import Link from "next/link";
import { useContext } from "react";
import { AuthProvider } from "../AuthContext";

const login = () => {
    const { login } = useContext(AuthProvider)
    const hanldeLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-5 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src='./login.png' alt="login" className="w-3/4" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hanldeLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered italic text-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered italic text-xs" />
                            <div className="form-control ml-2 italic ">
                                <p><small>New to this ? <Link className="underline text-blue-500" href="/login">SignUp</Link></small></p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default login;