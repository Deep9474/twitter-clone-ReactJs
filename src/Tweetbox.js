import React, { useState } from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./Firebase";
function Tweetbox() {

const [tweetmessage, setTweetmessage] = useState("");
const [tweetimage, setTweetimage] = useState("");

const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayname: "Deep Kasundra",
      username: "deepkasundra",
      verified: true,
      text: tweetmessage,
      image: tweetimage,
      avatar: "https://pbs.twimg.com/profile_images/1097532695200972800/8lGl84vQ_400x400.jpg"
    });

    setTweetmessage("");
    setTweetimage("");
  };






    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1097532695200972800/8lGl84vQ_400x400.jpg" />
                    <input
            onChange={(e) => setTweetmessage(e.target.value)}
            value={tweetmessage}
            placeholder="What's happening?"
            type="text"
          />
                </div>
                <input
          value={tweetimage}
          onChange={(e) => setTweetimage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />


                <Button  onClick={sendTweet}
          type="submit" className="tweetbox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;
