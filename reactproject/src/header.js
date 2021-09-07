import React from 'react'
import GooglekeepLogo from './GooglekeepLogo.png'
import Bilalgmaillogo from './Bilalgmaillogo.png'
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import "../src/header.css"


export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Notes</a></li>
          <li><a class="dropdown-item" href="#">Reminders</a></li>
          <li><a class="dropdown-item" href="#">Edit Labels</a></li>
          <li><a class="dropdown-item" href="#">Archieve</a></li>
          <li><a class="dropdown-item" href="#">Trash</a></li>
        </ul>
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
            <div style={{ borderRadius : "10px" }} id="icons_img">
              <img src={Bilalgmaillogo} alt="Logo" />
            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Header
