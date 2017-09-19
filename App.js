import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';


class ChangingImage extends React.Component{

  constructor(props){
    super(props);
    this.state={width: 200, height: 100};

    setInterval(() => {
      this.setState(previousState => {
        return{height: previousState.height+200, width: previousState.width+100};
      });
    }, 1000);
  }
  render(){
    return(){
      <Image source=this.props.source style={{width: this.state.width, height: this.state.height}}/>
    }
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <ChangingImage source={pic}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
