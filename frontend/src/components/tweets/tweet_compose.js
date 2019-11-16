import React, { useState , Fragment } from 'react';

const TweetCompose = ({ composeTweet }) => {
    const [inputValue, setInputValue] = useState('');

    const submit = () => {
        let tweet = {
            text: inputValue
        }
        composeTweet(tweet);
    }

    const getInput = e => setInputValue(e.target.value);

    return (
        <div>
            <textarea onChange={getInput}></textarea>
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default TweetCompose;