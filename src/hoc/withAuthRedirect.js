import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
   getIsAuthSelector
} from '../redux/selectors/auth-selector.js';

const withAuthRedirect = (Component) => {
   const ComponentContainer = (props) => {
      if (!props.isAuth) return <Redirect to='/login' /> 
      
      return <Component {...props} />
   }

   const mapStateToProps = (state) => ({
      isAuth: getIsAuthSelector(state),
   });

   return connect(mapStateToProps)(ComponentContainer);
}


export default withAuthRedirect;