import React from 'react'
import './styles.scss'
import Edit from './../../components/SignUp/edit'

const Profile = ({currentUser}) => {
    return(
        <div>
        <Edit currentUser={currentUser}/>
        </div>
    )
}

export default Profile