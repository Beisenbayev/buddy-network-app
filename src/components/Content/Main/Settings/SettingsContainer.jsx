import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   updateProfileThunkCreater,
   updateStatusThunkCreater,
   updateAvatarThunkCreater,
} from '../../../../redux/reducers/profile-reducer.js';

import Settings from './Settings';

class SettingsContainer extends React.Component {
   render() {
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
   profile: state.profilePage.profile,
   status: state.profilePage.status,
});

const mapDispatchToProps = (dispatch) => ({
   updateProfile: (data) => dispatch(updateProfileThunkCreater(data)),
   updateStatus: (status) => dispatch(updateStatusThunkCreater(status)),
   updateAvatar: (avatar) => dispatch(updateAvatarThunkCreater(avatar)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(SettingsContainer);