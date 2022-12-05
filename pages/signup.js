import Link from "next/link";
import { useContext } from "react";
import { AuthProvider } from "../AuthContext";



const signup = () => {
    const { createUser, user, updateUser } = useContext(AuthProvider)
    // console.log(abc)
    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const users = result.user
                const profile = {
                    displayName: name
                }
                updateUser(profile)
                    .then(() => {
                        console.log(users)
                        const userInfo = {
                            email,
                            name
                        }
                        console.log(userInfo)
                        fetch('https://todo-server-team-siamcse.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-5 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src='./signup.png' alt="hello" className="w-3/4" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="full-name" className="input input-bordered italic text-xs" />
                        </div>
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
                            <div className="form-control ml-2 italic underline text-blue-500">
                                <p><small><Link href="/login">Login</Link></small></p>
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

export default signup;