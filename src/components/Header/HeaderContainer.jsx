import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getIsAuthSelector } from '../../redux/selectors/auth-selector.js';
import { logoutThunkCreater } from '../../redux/reducers/auth-reducer.js';

import Header from './Header';

class HeaderContainer extends React.Component {
   render() {
      return (
         <Header {...this.props} />
      );
   };
}

const mapStateToProps = (state) => ({
   isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
   logout: () => dispatch(logoutThunkCreater()),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);