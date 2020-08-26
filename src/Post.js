import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';
function Post({displayname, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
            <Avatar src= {avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                <div className="post__headertext">
                    <h3>
    {displayname}{" "} <span className="user__name">
    {verified &&<VerifiedUserIcon  className="verified__badge"/>}{username}</span>  
                    </h3>
                    <div className="post__descrption">
                     <p> {text} </p>
                    </div>
                    </div>
                    <img className="post__image"  src= {image} alt="" />   
                    </div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
            
        </div>
    )
}

export default Post
