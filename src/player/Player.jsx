import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './player.scss'

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Player
