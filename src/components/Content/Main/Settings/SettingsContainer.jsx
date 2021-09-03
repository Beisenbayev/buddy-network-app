import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   setProfileThunkCreater,
   updateProfileThunkCreater,
   updateStatusThunkCreater,
   updateAvatarThunkCreater,
} from '../../../../redux/reducers/profile-reducer.js';

import Preloader from '../../../common/Preloader/Preloader';
import Settings from './Settings';

class SettingsContainer extends React.Component {
   componentDidMount() {
      this.props.setProfile(this.props.id);
   }

   render() {
      if (this.props.isFetching) return <Preloader />

      return (
         <Settings profile={this.props.profile}
            status={this.props.status}
            updateProfile={this.props.updateProfile}
            updateStatus={this.props.updateStatus}
            updateAvatar={this.props.updateAvatar} />
      );
   };
}

const mapStateToProps = (state) => ({
   id: state.authorization.id,
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   isFetching: state.profilePage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
   setProfile: (id) => dispatch(setProfileThunkCreater(id)),
   updateProfile: (data) => dispatch(updateProfileThunkCreater(data)),
   updateStatus: (status) => dispatch(updateStatusThunkCreater(status)),
   updateAvatar: (avatar) => dispatch(updateAvatarThunkCreater(avatar)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(SettingsContainer);