import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'
import Image from "../assets/trivaGameBackgroundImage.jpg"

const Welcome = () => (
        <Link to={`/bridalPartyShowdown`}>
            <img src={Image}/>
        </Link>
)

export default Welcome
