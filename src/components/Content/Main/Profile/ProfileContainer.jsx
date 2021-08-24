import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   setProfileThunkCreater
} from '../../../../redux/reducers/profile-reducer.js';
import {
   followThunkCreater,
   unfollowThunkCreater
} from '../../../../redux/reducers/members-reducer.js';

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
            unfollow={this.props.unfollow} />
      );
   }
}

const mapStateToProps = (state) => ({
   id: state.authorization.id,
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   followed: state.profilePage.followed,
   followingInProgress: state.membersPage.followingInProgress,
   isFetching: state.profilePage.isFetching,
   isAuth: state.authorization.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
   setProfile: (id) => dispatch(setProfileThunkCreater(id)),
   follow: (id) => dispatch(followThunkCreater(id)),
   unfollow: (id) => dispatch(unfollowThunkCreater(id)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withRouter,
   withAuthRedirect
)(ProfileContainer);