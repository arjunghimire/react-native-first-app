import React from 'react';
import { StyleSheet,ScrollView, Text, View ,Button} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      toogle: false,
      photos: []
    }
  }
  onPressLearnMore = () => {
    this.setState({toogle: !this.state.toogle})
  }
  render() {
    return (
      <View style={this.state.toogle ? styles.containerblack :  styles.containerwhite}>
        <Text style={styles.header}>Arjun Ghimire</Text>
        <Button
          onPress={this.onPressLearnMore}
          title={this.state.toogle ? "Turn On" : "Turn Off"}
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerwhite: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerblack: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  header: {
    color: 'red',
    marginBottom: 40
  }

});
