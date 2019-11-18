import React, { useState, useEffect, Fragment, useRef } from 'react';
import TweetBox from '../tweets/tweet_box';
import { isEqual } from 'lodash';

// class Profile extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             tweets: []
//         }
//     }

//     componentDidMount(){
//         this.props.fetchUserTweets(this.props.currentUser.id)
//     }

//     componentWillReceiveProps(nextProps){
//         this.setState({tweets: this.props.tweets })
//     }

//     render(){
//         const { tweets } = this.props;
//         if(tweets.length === 0){
//             return <div>there are no tweets</div>
//         } else {
//             const formatted = tweets.map( tweet => <TweetBox key={tweet._id} text={tweet.text} /> )
//             return (
//               <Fragment>
//                 <h2>here are some tweets</h2>
//                 {formatted}
//               </Fragment>
//             );
//         }
//     }
// }



// hooks version, just can't get it to work exactly right :(
const Profile = ({ fetchUserTweets, currentUser, tweets }) => {

    const [stateTweets, setStateTweets] = useState([]);
    const [getNewTweets, setGetNewTweets] = useState(true);

    useEffect( () => {
        if(getNewTweets){
            fetchUserTweets(currentUser.id);
            setGetNewTweets(false);
        }
        setStateTweets(tweets);
    }, [getNewTweets])


    const renderTweets = () => {

        if(stateTweets.length === 0){
            return <div>there are no tweets</div>
        } else {
            const formatted = stateTweets.map( tweet => <TweetBox key={tweet._id} text={tweet.text} /> )
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