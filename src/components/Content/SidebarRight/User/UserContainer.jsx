import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import User from './User';

class UserContainer extends React.Component {
   render() {
      return (
         <User {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   id: state.authorization.id,
   login: state.authorization.login,
   avatar: state.authorization.avatar,
   isAuth: state.authorization.isAuth,
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(UserContainer);