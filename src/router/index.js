import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from '../views/Home'
import Login from '../views/Login'
import CreateProfile from '../views/CreateProfile'
import Post from '../views/Post'
import UserProfile from '../views/UserProfile'/*
import Activity from '../views/Activity'*/

const Router = createAppContainer(
    createSwitchNavigator({
        Home,
        UserProfile,
        Post,
        Login,
        CreateProfile,
        /*,
        Activity*/
    })
)

export default Router