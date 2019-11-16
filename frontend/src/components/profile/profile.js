import React, { useState, useEffect, Fragment, useRef } from 'react';
import TweetBox from '../tweets/tweet_box';
import { isEqual } from 'lodash';


const Profile = ({ fetchUserTweets, currentUser, tweets }) => {

    const usePrevious = value => {
        const ref = useRef();
        useEffect( () => {
            ref.current = value;
        })
        return ref.current;
    }

    const [currentTweets, setCurrentTweets] = useState([]);
    const prevTweets = usePrevious(tweets);
    
    useEffect( () => {
        if(!isEqual(tweets, prevTweets)){
            fetchUserTweets(currentUser.id);
            setCurrentTweets(tweets);
        }
    }, [prevTweets]);

    const renderTweets = () => {

        if(tweets.length === 0){
            return <div>there are no tweets</div>
        } else {
            const formatted = tweets.map( tweet => <TweetBox key={tweet._id} text={tweet.text} /> )
            return (
              <Fragment>
                <h2>here are some tweets</h2>
                {formatted}
              </Fragment>
            );
        }
    }

    return renderTweets();
}

export default Profile;