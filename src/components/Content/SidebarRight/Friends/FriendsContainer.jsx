import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Friends from './Friends';

class FriendsContainer extends React.Component {
   render() {
      return (
         <Friends {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   friends: state.membersPage.friends,
   isAuth: state.authorization.isAuth,
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(FriendsContainer);