import React from "react";

function Login(){
    return(
        <div className="login">
            <div className="Login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" />
                </form>
            </div>
        </div>
    );
}

export default Login;