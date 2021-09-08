import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   getIdSelector,
   getProfileSelector,
   getStatusSelector,
   getFollowedSelector,
   getFollowingInProgressSelector,
   getIsFetchingSelector,
   getIsAuthSelector,
} from '../../../../redux/selectors/profile-selector.js';
import {
   setProfileThunkCreater
} from '../../../../redux/reducers/profile-reducer.js';
import {
   followThunkCreater,
   unfollowThunkCreater
} from '../../../../redux/reducers/members-reducer.js';
import {
   startNewChatThunkCreater
} from '../../../../redux/reducers/messages-reducer.js';

import Preloader from '../../../common/Preloader/Preloader';
import Profile from './Profile';

class ProfileContainer extends React.Component {
   refreshProfile() {
      let userId = this.props.match.params.userId || this.props.id;
      this.props.setProfile(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.userId !== this.props.match.params.userId) this.refreshProfile();
   }

   onStartNewChat(userId) {
      this.props.startNewChat(userId)  
         .then(() => <Redirect to={`/messages/${this.props.id}`} />)
   }

   render() {
      if (this.props.isFetching) return <Preloader />

      return (
         <Profile id={this.props.id}
            profile={this.props.profile}
            status={this.props.status}
            followed={this.props.followed}
            followingInProgress={this.props.followingInProgress}
            isOwner={!this.props.match.params.userId}
            isAuth={this.props.isAuth}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            startNewChat={this.onStartNewChat.bind(this)} />
      );
   }
}

const mapStateToProps = (state) => ({
   id: getIdSelector(state),
   profile: getProfileSelector(state),
   status: getStatusSelector(state),
   followed: getFollowedSelector(state),
   followingInProgress: getFollowingInProgressSelector(state),
   isFetching: getIsFetchingSelector(state),
   isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
   setProfile: (id) => dispatch(setProfileThunkCreater(id)),
   follow: (id) => dispatch(followThunkCreater(id)),
   unfollow: (id) => dispatch(unfollowThunkCreater(id)),
   startNewChat: (id) => dispatch(startNewChatThunkCreater(id)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withRouter,
   withAuthRedirect
)(ProfileContainer);