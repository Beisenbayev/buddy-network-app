import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
	getInitializedSelector 
} from './redux/selectors/app-selector.js';
import { 
	startInitializationAC as initialize
} from './redux/reducers/app-reducer';
import s from './App.module.css';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Preloader from './components/common/Preloader/Preloader';

const App = (props) => {
	const dispatch = useDispatch();
	const initialized = useSelector(state => getInitializedSelector(state));

	useEffect(() => {
		dispatch(initialize());
	}, []);

	if (!initialized) return <Preloader className={s.preloader} />

	return (
		<div className={s.block}>
			<Header />
			<Content />
		</div>
	);
}


export default App;

//add with fetching preloader hoc