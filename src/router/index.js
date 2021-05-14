import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from '../views/Home'
import Login from '../views/Login'
import CreateProfile from '../views/CreateProfile'
import Post from '../views/Post'
import UserProfile from '../views/UserProfile'
import Profile from '../views/Profile'
import Activity from '../views/Activity'
import QrCode from '../views/QrCode'
import Info from '../views/Info'

const Router = createAppContainer(
    createSwitchNavigator({
        Info,
        Login,
        Home,
        UserProfile,
        Post,
        CreateProfile,
        Profile,
        Activity,
        QrCode,
    })
)

export default Router