import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
   getMembersSelector,
   getCurrentPageSelector,
   getPageItemsCountSelector,
   getTotalItemsCountSelector,
   getTotalMembersCountSelector,
   getTotalFriendsCountSelector,
   getMembersTypeSelector,
   getSearchTermSelector,
   getFollowingInProgressSelector,
   getIsFetchingSelector,
   getIsAuthSelector,
} from '../../../../redux/selectors/members-selector.js';
import {
   setMembersThunkCreater,
   followThunkCreater,
   unfollowThunkCreater
} from '../../../../redux/reducers/members-reducer.js';

import Preloader from '../../../common/Preloader/Preloader';
import Members from './Members';

class MembersContainer extends React.Component {
   componentDidMount() {
      this.props.setMembers(this.props.pageItemsCount, this.props.currentPage,
         this.props.searchTerm, this.props.membersType);
   }

   onMembersTypeChange(type) {
      this.props.setMembers(this.props.pageItemsCount, 1, '', type);
   }

   onMembersSearch(term) {
      this.props.setMembers(this.props.pageItemsCount, 1, term, null);
   }

   onPageChange(page) {
      this.props.setMembers(this.props.pageItemsCount, page,
         this.props.searchTerm, this.props.membersType);
   }

   render() {
      if (this.props.isFetching) return <Preloader />

      return (
         <Members members={this.props.members}
            currentPage={this.props.currentPage}
            pageItemsCount={this.props.pageItemsCount}
            totalItemsCount={this.props.totalItemsCount}
            totalMembersCount={this.props.totalMembersCount}
            totalFriendsCount={this.props.totalFriendsCount}
            followingInProgress={this.props.followingInProgress}
            isAuth={this.props.isAuth}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageChange={this.onPageChange.bind(this)}
            membersTypeChange={this.onMembersTypeChange.bind(this)}
            membersSearch={this.onMembersSearch.bind(this)} />
      );
   };
}

const mapStateToProps = (state) => ({
   members: getMembersSelector(state),
   currentPage: getCurrentPageSelector(state),
   pageItemsCount: getPageItemsCountSelector(state),
   totalItemsCount: getTotalItemsCountSelector(state),
   totalMembersCount: getTotalMembersCountSelector(state),
   totalFriendsCount: getTotalFriendsCountSelector(state),
   membersType: getMembersTypeSelector(state),
   searchTerm: getSearchTermSelector(state),
   followingInProgress: getFollowingInProgressSelector(state),
   isFetching: getIsFetchingSelector(state),
   isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
   setMembers: (count, page, term = '', friend = null) => dispatch(setMembersThunkCreater(count, page, term, friend)),
   follow: (id) => dispatch(followThunkCreater(id)),
   unfollow: (id) => dispatch(unfollowThunkCreater(id)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(MembersContainer);