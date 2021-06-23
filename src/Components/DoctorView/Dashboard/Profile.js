import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import DoctorProfile from './DoctorProfile'

function Profile() {
    return (
        <div>
            <WelcomeMessage />
            <center>
                <DoctorProfile />
            </center>
        </div>
    )
}

export default Profile