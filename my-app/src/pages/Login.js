import React, { useState } from 'react';
import GoogleButton from "../components/GoogleButton";

function Login() {
    const [idToken, setIdToken] = useState('');

    const handleCredentialResponse = (response) => {
        if (response.credential) {
            const idToken = response.credential;
            setIdToken(idToken);

            const { email, name, googleID } = response.profileObj;

            // Send the ID token to your server using a POST request
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idToken, email, name, googleID })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // Log the token
                    console.log(data.token);
                    console.log(response.json);

                    // Decode the JSON response
                    const status = JSON.parse(data.status);
                    console.log(status);
                    console.log(response.type);
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }

    return (
        <>
            <div id="g_id_onload"
                data-client_id="448595911705-g9hvvvvh250k4jsbjq1961q9s3432btr.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri=""
                data-itp_support="true">
            </div>

            <div className="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
                data-credential_hint="include"
                data-response_type="credential"
                data-prompt_parent_id="g_id_onload">
            </div>
        </>
    );
}

export default Login;
