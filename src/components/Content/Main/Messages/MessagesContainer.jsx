import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   getDialogsSelector,
   getMessagesSelector,
   getCurrentPageSelector,
   getPageMessagesCountSelector,
   getTotalMessagesCountSelector,
   getLastMessageStateSelector,
   getIsFetchingSelector
} from '../../../../redux/selectors/messages-selector.js';
import {
   getIdSelector,
} from '../../../../redux/selectors/auth-selector.js';
import {
   setMessagesThunkCreater,
   sendNewMessageThunkCreater
} from '../../../../redux/reducers/messages-reducer.js';

import Preloader from '../../../common/Preloader/Preloader';
import Messages from './Messages';

class MessagesContainer extends React.Component {
   userId = this.props.match.params.userId; //add it to local state
   interlocutor = this.props.dialogs.filter(dialog => dialog.id == this.userId)[0];

   componentDidMount() {
      this.props.setMessages(this.userId, this.props.pageMessagesCount, 1);
   }

   onSendNewMessage(text) {
      this.props.sendNewMessage(this.userId, text);
   }

   onPageChange(page) {
      this.props.setMessages(this.userId, this.props.pageMessagesCount, page);
   }

   render() {
      if (this.props.isFetching) return <Preloader />

      return (
         <Messages ownerId={this.props.ownerId}
            interlocutor={this.interlocutor}
            messages={this.props.messages}
            currentPage={this.props.currentPage}
            pageMessagesCount={this.props.pageMessagesCount}
            totalMessagesCount={this.props.totalMessagesCount}
            sendNewMessage={this.onSendNewMessage.bind(this)} />
      );
   };
}

const mapStateToProps = (state) => ({
   ownerId: getIdSelector(state),
   dialogs: getDialogsSelector(state),
   messages: getMessagesSelector(state),
   currentPage: getCurrentPageSelector(state),
   pageMessagesCount: getPageMessagesCountSelector(state),
   totalMessagesCount: getTotalMessagesCountSelector(state),
   lastMessageState: getLastMessageStateSelector(state),
   isFetching: getIsFetchingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
   setMessages: (userId, count, page) => dispatch(setMessagesThunkCreater(userId, count, page)),
   sendNewMessage: (userId, text) => dispatch(sendNewMessageThunkCreater(userId, text))
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withRouter,
   withAuthRedirect,
)(MessagesContainer);