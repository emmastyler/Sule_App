import React from 'react';
import './body.scss';
import Header from "../header/Header"
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../songrow/SongRow';



const Body = ({spotify}) => {
    const [{playlists_tracks}] = useDataLayerValue();
    
    return (
        <div className="body">
           <Header spotify={spotify}/>
           <div className="body__info">
               <img src={playlists_tracks?.images[0]?.url} alt="" />
               <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{playlists_tracks?.name}</h2>
                    <p>{playlists_tracks?.description}</p>
               </div>
           </div>
           <div className="body__songs">
               <div className="body__icon">
                   <PlayCircleFilledIcon className="body__shuffle"/>
                   <FavoriteIcon  fontSize="large"/>
                   <MoreHorizIcon />
               </div>
               {playlists_tracks?.tracks.items.map(item => (
                   <SongRow track={item.track} />
               ))}
           </div>
        </div>
    )
}

export default Body
