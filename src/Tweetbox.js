import React from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
function Tweetbox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/47965259?s=460&u=b302cb87c973148e2410a4e7454f3b14cfcec8ab&v=4" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetbox__image" placeholder="Enter image URL" type="text" />

                <Button className="tweetbox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;
