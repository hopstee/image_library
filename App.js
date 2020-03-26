import React, { useState } from 'react';
import * as Font from 'expo-font';
import Navigation from './routes/HomeStack';
import { AppLoading } from 'expo';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import imagesReducer from './data/getData';

// const store = createStore(imagesReducer);

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
		}
	}

	getFonts() {
		Font.loadAsync({
			'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
			'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
		})
	}

	render() {
		if(this.state.fontsLoaded) {
			return (
				<Navigation />
			);
		} else {
			return (
				<AppLoading 
					startAsync={this.getFonts}
					onFinish={() => this.setState({fontsLoaded: true})}
				/>
			)
		}
	}
}