import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getInitializedSelector } from './redux/selectors/app-selector.js';
import { initializeThunkCreate } from './redux/reducers/app-reducer';
import s from './App.module.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Content from './components/Content/Content';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		setTimeout(() => this.props.initialize(), 1000);
	}

	render() {
		if (!this.props.initialized) return <Preloader className={s.preloader} />

		return (
			<div className={s.block}>
				<HeaderContainer />
				<Content />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: getInitializedSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	initialize: () => dispatch(initializeThunkCreate()),
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(App);

