import React, { useState, useEffect, Fragment } from 'react';
import TweetBox from '../tweets/tweet_box';


const Profile = ({ fetchUserTweets, currentUser, tweets }) => {

    const [stateTweets, setStateTweets] = useState(tweets);
    const [getNewTweets, setGetNewTweets] = useState(true);

    useEffect( () => {
        if(getNewTweets){
            fetchUserTweets(currentUser.id);
            setGetNewTweets(false);
        }
        setStateTweets(tweets);
    }, [ [], getNewTweets])


    const renderTweets = () => {

        if(stateTweets.length === 0){
            return <div>there are no tweets</div>
        } else {
            const formatted = stateTweets.map( tweet => <TweetBox key={tweet._id} text={tweet.text} /> )
            return (
              <div className="tweets-container">
                <div className="tweets-list">
                  <h2>here are some tweets</h2>
                  {formatted}
                </div>
              </div>
            );
        }
    }

    return renderTweets();
}

export default Profile;