import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import UserProfile from './UserProfile'

function Profile() {
    return (
        <div>
            <WelcomeMessage />
            <center>
                <UserProfile />
            </center>
        </div>
    )
}

export default Profile