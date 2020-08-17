import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOption from "./SidebarOption";
function Sidebar() {
    return (
        <div>
            <TwitterIcon />
<SidebarOption Icon={HomeIcon} text="Home" />
<SidebarOption Icon={SearchIcon} text="Explore" />
<SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
<SidebarOption Icon={MailOutlineIcon} text="Messages" />

<SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
<SidebarOption Icon={ListAltIcon} text="Lists" />
<SidebarOption Icon={PermIdentityIcon} text="Profile" />
<SidebarOption Icon={MoreHorizIcon} text="More" />

        </div>
    )
}

export default Sidebar;