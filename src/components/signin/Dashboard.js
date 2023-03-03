import React from 'react';
import DashButton from './DashButton';

import './style/dashboard.css';

function Dashboard() {
    return (
        <div className = "dashboard-container">
            <h1>Dashboard</h1>
            <div className='dashboard'>
              <div className='dashboard-buttons'>
                  <DashButton link="https://forms.gle/pwni41toLsc1ZBpU9" text="Brother Absence Form"></DashButton>
                  <DashButton link="https://forms.gle/pwni41toLsc1ZBpU9" text="Fraternity Feedback Form"></DashButton>
                  <DashButton link="https://forms.gle/pwni41toLsc1ZBpU9" text="Risk Form"></DashButton>
                  <DashButton link="https://forms.gle/pwni41toLsc1ZBpU9" text="Alumni Direcotry"></DashButton>
              </div>
            </div>
        </div>
    );

};

export default Dashboard;