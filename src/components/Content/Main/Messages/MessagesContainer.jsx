import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Messages from './Messages';

class MessagesContainer extends React.Component {
   render() {
      return (
         <Messages />
      );
   };
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer);