import React from 'react';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import './player.scss'

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body spotify={spotify}/>

            </div>
            <Footer />
        </div>
    )
}

export default Player
