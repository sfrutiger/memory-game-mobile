import { StyleSheet, Text, View } from 'react-native';

function Instructions() {

    return (
      <View>
          <Text style={styles.instructions}>Select each color only once</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    instructions: {
      color: 'white'
    },
  });
  
  export default Instructions;