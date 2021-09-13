import React from 'react'
import GooglekeepLogo from './GooglekeepLogo.png'
import Bilalgmaillogo from './Bilalgmaillogo.png'
import RefreshIcon from '@material-ui/icons/RefreshOutlined';
import ViewStreamIcon from '@material-ui/icons/ViewStreamOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import "../src/header.css"

export const Header = (props) => {
  const handleClickDrawerToggle = () => {
    props.drawerExpand();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button onClick={handleClickDrawerToggle}><DehazeOutlinedIcon/></button>
        <img src={GooglekeepLogo} alt="Logo" />
        <a class="navbar-brand" href="#">Keep</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <input style={{ width: "840px" }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
        <div id="icons_main">
          <div id="icons_main1">
            <div id="icons_refresh">
              <RefreshIcon />
            </div>
            <div id="icons_view">
              <ViewStreamIcon />
            </div>
            <div id="icons_setting">
              <SettingsIcon />
            </div>
          </div>
          <div id="icons_main2">
            <div id="icons_apps">
              <AppsIcon />
            </div>
            <div id="icons_img">
              <img src={Bilalgmaillogo} alt="Logo" />
            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Header
