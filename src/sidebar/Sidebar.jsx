import React, {useState, useEffect} from 'react';
import SidebarOption from '../sidebaroption/SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"; 
import './sidebar.scss'
import { useDataLayerValue } from '../DataLayer';

const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue();
    const [id, setId] = useState('');
    console.log(id)
   
    return (
        <div className="sidebar">
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" className="sidebar__logo"/>
        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((item) => (
            <SidebarOption title={item.name} onClick={() => setId(item.id)}/>
           
        ))}
        
        </div>
        
    )
}

export default Sidebar
