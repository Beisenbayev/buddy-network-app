import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Statistics from './Statistics';

class StatisticsContainer extends React.Component {
   render() {
      return (
         <Statistics {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   totalMembersCount: state.membersPage.totalMembersCount,
   totalFriendsCount: state.membersPage.totalFriendsCount,
   isAuth: state.authorization.isAuth
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(StatisticsContainer);