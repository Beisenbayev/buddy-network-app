import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const withAuthRedirect = (Component) => {
   const ComponentContainer = (props) => {
      if (!props.isAuth) return <Redirect to='/login' /> 
      
      return <Component {...props} />
   }

   const mapStateToProps = (state) => ({
      isAuth: state.authorization.isAuth,
   });

   return connect(mapStateToProps)(ComponentContainer);
}


export default withAuthRedirect;