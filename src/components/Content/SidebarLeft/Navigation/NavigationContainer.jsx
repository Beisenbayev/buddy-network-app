import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Navigation from './Navigation';

class NavigationContainer extends React.Component {
   render() {
      return (
         <Navigation {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   newMessagesCount: state.messagesPage.newMessagesCount,
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(NavigationContainer);