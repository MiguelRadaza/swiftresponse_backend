import React from 'react';

const LoginPage = () => {
    return (
        <div class="Loginbox" style={{ display: 'block' }}>
            <div id="loginform">
                <div id="first" >
                    <label id="Leftheader">CALLision</label><br />
                    <div >
                        <label id="Leftlabel">Swift reponse: A Road Accident Reporting for
                            City of Malabon </label>
                    </div>
                </div>
                <div id="second">
                    <h1 id="Loginheader">Log In</h1>
                    <label>Email</label><br />
                    <input type="text" id="email" name="email" required></input><br />
                    <label>Password</label><br />
                    <input type="password" id="password" name="password" required></input><br />
                    <p id="Reglink">Dont have an account? <a onclick="" id="register-link">Register here</a></p>
                    <center><div class="button"><input id="Logbutton" type="submit" value="Login" ></input></div></center>
                </div>
            </div>
        </div >

    );
};

export default LoginPage;