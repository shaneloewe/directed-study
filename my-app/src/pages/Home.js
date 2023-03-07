import React from 'react';
import GetUserId from '../components/GetUserId.js';

// The <Hello userEmail="" /> line below will NOT
// have my email hardcoded in the final version. After
// I get authentication working, I will fetch the email
// or OpenId of whoever logs in and then immediately
// check it against the database to see if the user
// already exists; and then set the currentUser to that
// userId.The first thing the home page will do is 
// prompt the Auth component, and the call to

const value_from_auth0 = "shaneloewe@gmail.com";
//console.log(value_from_auth0);

function Home() {
    return (
        <div>
            <h1>Wenevr</h1>
            <GetUserId userEmail={value_from_auth0} />
        </div>
    );
}

export default Home;