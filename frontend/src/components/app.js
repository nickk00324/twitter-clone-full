import React, { Fragment } from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container'

import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';
import TweetsContainer from './tweets/tweets_container';

const App = () => (
  <Fragment>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />

      <ProtectedRoute exact path='/tweets' component={TweetsContainer} />
      <ProtectedRoute exact path='/profile' component={ProfileContainer} />
      <ProtectedRoute exact path='/compose' component={TweetComposeContainer} />
    </Switch>
  </Fragment>
);

export default App;