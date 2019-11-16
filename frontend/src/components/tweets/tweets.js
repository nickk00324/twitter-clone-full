import React, { Fragment, useState, useEffect , useRef } from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box.js';
import { isEqual } from 'lodash'

const Tweets = ({ fetchTweets, tweets }) => {
    const usePrevious = value => {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    };

    const [currentTweets, setCurrentTweets] = useState([]);
    const prevTweets = usePrevious(tweets);

    useEffect(() => {
      if (!isEqual(tweets, prevTweets)) {
        fetchTweets();
        setCurrentTweets(tweets);
      }
    }, [prevTweets]);

    const renderTweets = () => {
      if (tweets.length === 0) {
        return <div>there are no tweets</div>;
      } else {
        const formatted = tweets.map(tweet => (
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