import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
   getNewcomersSelector,
} from '../../../../redux/selectors/newcomers-selector.js';

import Newcomers from './Newcomers';

class NewcomersContainer extends React.Component {
   render() {
      return (
         <Newcomers newcomers={this.props.newcomers} />
      );
   };
}

const mapStateToProps = (state) => ({
   newcomers: getNewcomersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({

});


export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(NewcomersContainer);