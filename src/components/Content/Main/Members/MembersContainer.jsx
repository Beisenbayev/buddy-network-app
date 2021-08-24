import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
   setMembersThunkCreater,
   followThunkCreater,
   unfollowThunkCreater
} from '../../../../redux/reducers/members-reducer.js';

import Preloader from '../../../common/Preloader/Preloader';
import Members from './Members';

class MembersContainer extends React.Component {
   componentDidMount() {
      this.props.setMembers(this.props.pageItemsCount, this.props.currentPage);
   }

   onPageChange(page) {
      this.props.setMembers(this.props.pageItemsCount, page);
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
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageChange={this.onPageChange.bind(this)} />
      );
   };
}

const mapStateToProps = (state) => ({
   members: state.membersPage.members,
   currentPage: state.membersPage.currentPage,
   pageItemsCount: state.membersPage.pageItemsCount,
   totalItemsCount: state.membersPage.totalItemsCount,
   totalMembersCount: state.membersPage.totalMembersCount,
   totalFriendsCount: state.membersPage.totalFriendsCount,
   followingInProgress: state.membersPage.followingInProgress,
   isFetching: state.membersPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
   setMembers: (count, page, term='', friend=null) => dispatch(setMembersThunkCreater(count, page, term, friend)),
   follow: (id) => dispatch(followThunkCreater(id)),
   unfollow: (id) => dispatch(unfollowThunkCreater(id)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(MembersContainer);