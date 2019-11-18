import React, { Fragment, useState, useEffect , useRef } from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box.js';
import { isEqual } from 'lodash'

const Tweets = ({ fetchTweets, tweets }) => {
    const [currentTweets, setCurrentTweets] = useState([]);
    const [shouldGetNewTweets, setShouldGetNewTweets] = useState(true);

    useEffect( () => {
        if(shouldGetNewTweets){
            fetchTweets();
            setShouldGetNewTweets(false);
        }
        setCurrentTweets(tweets);
    }, [shouldGetNewTweets])

    const renderTweets = () => {
      if (currentTweets.length === 0) {
        return <div>there are no tweets</div>;
      } else {
        const formatted = currentTweets.map(tweet => (
          <TweetBox key={tweet._id} text={tweet.text} />
        ));
        return (
          <Fragment>
            <h2>here are some tweets</h2>
            {formatted}
          </Fragment>
        );
      }
    };

    return renderTweets();
}

export default withRouter(Tweets)