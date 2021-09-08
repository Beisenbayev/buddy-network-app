import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
   getTotalMembersCountSelector,
   getTotalFriendsCountSelector,
} from '../../../../redux/selectors/members-selector.js';
import {
   getIsAuthSelector,
} from '../../../../redux/selectors/auth-selector.js';

import Statistics from './Statistics';

class StatisticsContainer extends React.Component {
   render() {
      return (
         <Statistics {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   totalMembersCount: getTotalMembersCountSelector(state),
   totalFriendsCount: getTotalFriendsCountSelector(state),
   isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(StatisticsContainer);