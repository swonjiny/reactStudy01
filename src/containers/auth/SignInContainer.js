import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../modules/auth";
import SignInForm from "../../components/auth/SignInForm";
import {withRouter} from "react-router-dom";

const SignInContainer = ( {history} ) => {
    const dispatch = useDispatch();

    const { accessToken } = useSelector( ({auth})=> ({
        accessToken: auth.accessToken
    })  )

    const onSignIn = (userId, password) => {
        try {
            dispatch(login({userId, password}))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (accessToken) {
            alert("로그인 되었습니다.");
            history.push("/");
        }
    }, [accessToken, dispatch, history]);

    return <SignInForm onSignIn={onSignIn}/>
}

export default withRouter(SignInContainer);