import React from 'react';

import '../style/dashboard.css';

function Dashboard({user}) {

    var CLIENT_ID = "901545100008-6d73pau39f65vqhq6b89s99crbm47keh.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBAP551-_iOC2AnlTvqipj3aUAvDuitLyM"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

    const handleClick = () => {
        console.log("userInfo", user)
        window.gapi.load('client', () => {
          window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          }).then(() => {
            console.log('Hari')
            window.gapi.client.calendar.events.list({
              calendarId: 'primary',
              timeMin: (new Date()).toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 1,
              orderBy: 'startTime',
            }).then(response => {
              const events = response.result.items;
              console.log('response');
              console.log('Events', events);
            });
          });
        });
    };

    return (
        <div className = "dashboard">
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Show Events</button>
        </div>
    );

};

export default Dashboard;