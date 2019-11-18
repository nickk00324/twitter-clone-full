import React, { useState , Fragment, useEffect } from 'react';
import TweetBox from './tweet_box';

const TweetCompose = ({ composeTweet, newTweet }) => {
    const [inputValue, setInputValue] = useState('');
    const [stateNewTweet, setStateNewTweet] = useState('');

    const submit = () => {
        let tweet = {
            text: inputValue
        }
        composeTweet(tweet);
        setInputValue('');
    }

    useEffect( () => {
        setStateNewTweet(newTweet);
    }, [newTweet])

    const showNewTweet = () => {
        return (
            stateNewTweet ? 
            <TweetBox text={stateNewTweet.text} />
            :
            null
        )
    }

    const getInput = e => setInputValue(e.target.value);

    return (
        <div>
            <textarea onChange={getInput} value={inputValue}></textarea>
            <button onClick={submit}>submit</button>
            {showNewTweet()}
        </div>
    )
}

export default TweetCompose;