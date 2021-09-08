import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Home from './Home';

class HomeContainer extends React.Component {
   render() {
      return (
         <Home />
      );
   };
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(HomeContainer);