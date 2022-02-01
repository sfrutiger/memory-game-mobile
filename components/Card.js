import { StyleSheet, View } from 'react-native';

function Card(props) {

    return (
      <View style = {styles.card}
        id = {props.id} 
        style = {{backgroundColor: `${props.color}`}} 
        onClick = {props.action}>
        </View>
    );
  }

  const styles = StyleSheet.create({
    card: {
      height: '85',
      width: '85'
    }
  });
  
  export default Card;