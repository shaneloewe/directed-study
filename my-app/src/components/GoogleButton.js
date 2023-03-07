
// This component is not operational right now, but when it does work
// the data-login_uri, callback url, redirect_uri (same thing), will
// redirect to the back-end server and call the getUserId function
// which will verify the user and set them as the currentUser, which
// will be a global variable in a config file that all of my .py files
// will import. When the function is done, we're back in this file and
// will be redirected to the Home page.

function GoogleButton() {
    return (
        <>
            <div id="g_id_onload"
                data-client_id="448595911705-g9hvvvvh250k4jsbjq1961q9s3432btr.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:3000"
                data-itp_support="true">
            </div>

            <div class="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        </>
    );
}

export default GoogleButton;
