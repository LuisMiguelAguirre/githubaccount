import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  ToastAndroid, 
  WebView, 
  Button, 
  Alert 
} from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';

export default class githubaccount extends Component {


 _onPressButton() {
	 this.setState({ repo:  ''});

	fetch('https://api.github.com/users/LuisMiguelAguirre/repos')
	.then((response) => response.json())
	.then((responseJSON) => {
			Alert.alert(responseJSON[0].html_url);
			this.setState({ repo:  responseJSON[0].html_url});
		
	}).done();

	
  }
  constructor() {
    super();
	this.state = {
      repo: "https://github.com/luismiguelaguirre/todo"
    };
	this._onPressButton = this._onPressButton.bind(this);

  }

  render() {
	  
	let repo = this.state//"https://github.com/luismiguelaguirre/todo"

	  
    return (
      <View style={styles.container}>
	  
	   <Button
            onPress={this._onPressButton}
            title="Some"
			
       />
	  
		<WebView
        source={{uri: this.state.repo}}
        style={{marginTop: 20}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  viewPager: {
    flex: 1,
  },
});

AppRegistry.registerComponent('githubaccount', () => githubaccount);
