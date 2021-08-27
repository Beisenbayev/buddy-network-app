import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginThunkCreater } from '../../../../redux/reducers/auth-reducer.js';

import Login from './Login';

class LoginContainer extends React.Component {
   onSendLoginData(formData) {
      const {email, password, rememberMe, captcha} = formData;
      this.props.login(email, password, rememberMe, captcha);
   }

   render() {
      if (this.props.isAuth) return <Redirect to='/profile' />

      return (
         <Login captchaUrl={this.props.captchaUrl}
            isSubmiting={this.props.isSubmiting}
            sendLoginData={this.onSendLoginData.bind(this)} />
      );
   };
}

const mapStateToProps = (state) => ({
   captchaUrl: state.authorization.captchaUrl,
   isSubmiting: state.authorization.isSubmiting,
   isAuth: state.authorization.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
   login: (email, password, rememberMe, captcha) => dispatch(loginThunkCreater(email, password, rememberMe, captcha)),
});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);