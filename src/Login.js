import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://stickershop.line-scdn.net/stickershop/v1/product/11491103/LINEStorePC/main.png;compress=true" alt="" 
                />
                <div className="login__text">
                    <h1>Sign in to AniChat</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
