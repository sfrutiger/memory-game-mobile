import { StyleSheet, Text, View } from 'react-native';

function Score(props) {

    return (
      <View>
          <Text style={styles.score}>Score: {props.score}</Text>
          <Text style={styles.score}>High Score: {props.highScore}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    score: {
      color: 'white'
    },
  });


  export default Score;