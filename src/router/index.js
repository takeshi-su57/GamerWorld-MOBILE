import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from '../views/Home'
import Login from '../views/Login'
import CreateProfile from '../views/CreateProfile'
import Post from '../views/Post'
import UserProfile from '../views/UserProfile'
import Profile from '../views/Profile'
import Activity from '../views/Activity'

const Router = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        UserProfile,
        Post,
        CreateProfile,
        Profile,
        Activity
    })
)

export default Router