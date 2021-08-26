import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   setDialogsThunkCreater
} from '../../../../redux/reducers/messages-reducer.js';

import Preloader from '../../../common/Preloader/Preloader';
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
   componentDidMount() {
      this.props.setDialogs();
   }

   render() {
      if (this.props.isFetching) return <Preloader />

      return (
         <Dialogs dialogs={this.props.dialogs} />
      );
   };
}

const mapStateToProps = (state) => ({
   dialogs: state.messagesPage.dialogs,
   isFetching: state.messagesPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
   setDialogs: () => dispatch(setDialogsThunkCreater()),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(DialogsContainer);