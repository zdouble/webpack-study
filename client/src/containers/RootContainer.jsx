import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import { initEnvironment } from '../actions/EnvironmentActions';
import { initRouter } from '../actions/RouterActions';
import { initAuth } from '../actions/SessionActions';
import Root from '../components/Root';
// import SongContainer from '../containers/SongContainer';
// import SongsContainer from '../containers/SongsContainer';
// import UserContainer from '../containers/UserContainer';

import {
  INDEX_PATH,
  PLAYLIST_PATH,
  SONG_PATH,
  SONGS_PATH,
  USER_PATH,
} from '../constants/RouterConstants';

const Loading = () => (
  <div>111</div>
)

const SongsContainer = Loadable({
  loader: () => import(/* webpackChunkName: "SongsContainer" */'../containers/SongsContainer'),
  loading: Loading,
});

const SongContainer = Loadable({
  loader: () => import(/* webpackChunkName: "SongContainer" */'../containers/SongContainer'),
  loading: Loading,
});

const UserContainer = Loadable({
  loader: () => import(/* webpackChunkName: "UserContainer" */'../containers/UserContainer'),
  loading: Loading,
});

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
    paths: [INDEX_PATH, PLAYLIST_PATH, SONG_PATH, SONGS_PATH, USER_PATH],
    router,
    routes: {
      [INDEX_PATH]: SongsContainer,
      [PLAYLIST_PATH]: SongsContainer,
      [SONG_PATH]: SongContainer,
      [SONGS_PATH]: SongsContainer,
      [USER_PATH]: UserContainer,
    },
  };
};


export default connect(mapStateToProps, {
  initAuth,
  initEnvironment,
  initRouter,
})(RootContainer);
