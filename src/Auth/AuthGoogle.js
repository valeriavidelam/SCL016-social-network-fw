import React from 'react'
import { SuspenseWithPerf, useAuth } from 'reactfire'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {withRouter} from 'react-router-dom'

function SignInForm () {
    const auth =  useAuth;
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            //Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => {
                console.log('Started successfully')
                //Acá debo redireccionar al Home
            },
        },
    };
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
}


function AuthGoogle() {
    return (
        <div>
            <SuspenseWithPerf traceId="firebase-user-wait" fallback={"Loading..."}>
                <SignInForm />
            </SuspenseWithPerf>
        </div>
    );
}

export default withRouter(AuthGoogle)