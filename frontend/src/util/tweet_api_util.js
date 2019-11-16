import axios from 'axios';

export const getTweets = () => (
    axios.get('/api/tweets')
)

export const getUserTweets = id => {
    return axios.get(`api/tweets/user/${id}`);
}
    
export const writeTweet = data => {
    console.log(data);
    return axios.post('/api/tweets/', data)
}