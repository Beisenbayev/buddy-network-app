import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { 
   getFriendsSelector,
   getIsAuthSelector
 } from '../../../../redux/selectors/friends-selector.js';

import Friends from './Friends';

class FriendsContainer extends React.Component {
   render() {
      return (
         <Friends {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   friends: getFriendsSelector(state),
   isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(FriendsContainer);