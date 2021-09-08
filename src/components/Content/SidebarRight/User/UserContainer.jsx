import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
   getIdSelector,
   getAvatarSelector,
   getLoginSelector,
   getIsAuthSelector,
} from '../../../../redux/selectors/auth-selector.js';

import User from './User';

class UserContainer extends React.Component {
   render() {
      return (
         <User {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   id: getIdSelector(state),
   login: getLoginSelector(state),
   avatar: getAvatarSelector(state),
   isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(UserContainer);