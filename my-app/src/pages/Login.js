function Login() {
    return (
        <>
            <div id="g_id_onload"
                data-client_id="448595911705-g9hvvvvh250k4jsbjq1961q9s3432btr.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:3000/callback"
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
