import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box.js';
import '../../styles/tweets.css';

const Tweets = ({ fetchTweets, tweets }) => {
    const [currentTweets, setCurrentTweets] = useState(tweets);
    const [shouldGetNewTweets, setShouldGetNewTweets] = useState(true);

    useEffect( () => {
        if(shouldGetNewTweets){
            fetchTweets();
            setShouldGetNewTweets(false);
        }
        setCurrentTweets(tweets);
    }, [ [], shouldGetNewTweets])

    const renderTweets = () => {
      if (currentTweets.length === 0) {
        return <div>there are no tweets</div>;
      } else {
        const formatted = currentTweets.map(tweet => (
          <TweetBox key={tweet._id} text={tweet.text} />
        ));
        return (
          <div className="tweets-container">
            <div className="tweets-list">
              <h2>here are all the tweets</h2>
              {formatted}
            </div>
          </div>
        );
      }
    };

    return renderTweets();
}

export default withRouter(Tweets)