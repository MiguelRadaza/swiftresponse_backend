import { React, useState, useEffect } from 'react';
import { auth, firebase, signInWithFirebase } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [errorCode, setErrorCode] = useState(null);
    const [user, setUser] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signInWithFirebase(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setErrorCode(error.code);
            });
    };

    useEffect(() => {
        // Your initialization function here
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                router.push({
                    pathname: '/home',
                    query: { returnUrl: router.asPath }
                });
            } else {
                router.push({
                    pathname: '/auth/login',
                    query: { returnUrl: router.asPath }
                });
            }
        });
    }, []);

    return (
        <div className="Loginbox" style={{ display: 'block' }}>

            <div id="loginform">
                <div id="first" >
                    <label id="Leftheader">CALLision</label><br />
                    <div >
                        <label id="Leftlabel">Swift reponse: A Road Accident Reporting for
                            City of Malabon </label>
                    </div>
                </div>
                <div id="second">

                    {error &&
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    <form onSubmit={handleSubmit}>
                        <h1>Log In</h1>
                        <label>Email</label><br />
                        <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required></input><br />
                        <label>Password</label><br />
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required></input><br />
                        <center>
                            <div className="button">
                                <input id="Logbutton" type="submit" value="Login" ></input>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
        </div >

    );
};

export default LoginPage;