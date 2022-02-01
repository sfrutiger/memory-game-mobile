import { TouchableOpacity, Text } from 'react-native';

function Card(props) {

    return (
      <TouchableOpacity style = {
        {backgroundColor: `${props.color}`, 
        height: '30%',
        aspectRatio: 1}}
        id = {props.id} 
        onPress = {props.action}>
        {/* <Text>{props.id}</Text> */}
        </TouchableOpacity>
    );
  }
  
  export default Card;