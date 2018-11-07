import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'
import Image from "../assets/test.jpg"

const Welcome = () => (
        <Link to={`/briadalPartyShowdown`}>
            <img src={Image}/>
        </Link>
)

export default Welcome
