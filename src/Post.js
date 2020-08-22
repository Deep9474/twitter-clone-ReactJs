import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post_avatar">
            <Avatar src="https://avatars2.githubusercontent.com/u/47965259?s=460&u=b302cb87c973148e2410a4e7454f3b14cfcec8ab&v=4" />
            </div>
            <div className="post__body">
                <div className="post__header">
                <div className="post__headertext">
                    <h3>
                        Deep Kasundra{" "} <span className="user__name"><VerifiedUserIcon className="verified__badge"/>@deepkasundra</span>  
                    </h3>
                    <div className="post__descrption">
                     <p>   Hello there how are you doing!!!! </p>
                    </div>
                    </div>
                    <img className="post__image"  src="https://avatars2.githubusercontent.com/u/47965259?s=460&u=b302cb87c973148e2410a4e7454f3b14cfcec8ab&v=4" alt="Deep" />   
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
