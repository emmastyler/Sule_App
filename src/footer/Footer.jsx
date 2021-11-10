import React from 'react';
import './footer.scss';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
               <img src="https://mosaic.scdn.co/640/ab67616d0000b2736b2e2d85fd6f8248853796f2ab67616d0000b273871d8e1a47e7c655b6739a6aab67616d0000b273e48bafa795ea44916cf134caab67616d0000b273f2a972ad9b4fa003caa00092" 
                    alt="" className="footer__albumLogo"/>
               <div className="footer__songInfo">
                   <h4>Halo</h4>
                    <p>Beyonce</p>
               </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green"/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
