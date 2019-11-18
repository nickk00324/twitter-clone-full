import React, { useState , useEffect } from 'react';
import TweetBox from './tweet_box';

const TweetCompose = ({ composeTweet, newTweet }) => {
    const [inputValue, setInputValue] = useState('');
    const [stateNewTweet, setStateNewTweet] = useState(newTweet);

    const submit = () => {
        let tweet = {
            text: inputValue
        }
        composeTweet(tweet);
        setInputValue('');
    }

    useEffect( () => {
        if(newTweet === stateNewTweet){
            setStateNewTweet('');
        } else {
            setStateNewTweet(newTweet);
        }
    }, [newTweet])

    const getInput = e => setInputValue(e.target.value);

    return (
      <div className="form-container">
        <div className="compose-form">
          <textarea onChange={getInput} value={inputValue}></textarea>
          <button className="submit" onClick={submit}>submit</button>
          { stateNewTweet ? 
            <TweetBox text={stateNewTweet.text} /> : null
          }
        </div>
      </div>
    );
}

export default TweetCompose;