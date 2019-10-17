import React , {Component }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import firebase from './firebase';
export default class App extends Component {
  carDatabase = firebase.database().ref('car');
  state = { cars : {} , selectedId: ''}
  //read
  componentDidMount() {
   this.carDatabase.on('value', cars => {
     const carsJSON = cars.val();
    this.setState({cars: carsJSON === null ? {} : carsJSON }) ;
   })
   this.carDatabase.push({color: 'red'})
  }
  //create
  create(){
  this.carDatabase
  .push({color: 'yellow'})
}

  //update
 update() {
  this.carDatabase.child(this.state.selectedId)
  .set({color: 'red'})
  this.setState({selectedId: ''})
 }

 //Delete
 deleteCar(){
  if(this.state.selectedId === ''){
    return;
  }
  this.carDatabase.child(this.state.selectedId)
  .set(null)
  this.setState({selectedId: ''})
 }

  render(){ 
  return (
    <View style={styles.container}>
       <TextInput value={this.state.selectedId} style={styles.TextInput}></TextInput>
       <Button title="Create" onPress={()=>this.create()}></Button>
       <Button title="Update" onPress={()=>this.update()}></Button>
       <Button title="Delete" onPress={()=>this.deleteCar()}></Button>
     {
       Object.keys(this.state.cars).map( (carId, index ) =>
        <TouchableOpacity key={index} onPress={()=>this.setState({selectedId: carId})}>
<Text>{`${carId}:${JSON.stringify(this.state.cars[carId])}`}</Text>
        </TouchableOpacity>
       )

     }
    
     {/* <Text>{JSON.stringify(this.state.cars,null,2)}</Text> */}
    </View>
  );
}
}
const styles = StyleSheet.create({
  TextInput:{
    backgroundColor:'red',
    height:40,
    width:'100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
