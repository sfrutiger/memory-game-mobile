import { StyleSheet, Text, View } from 'react-native';

function Instructions() {

    return (
      <View>
          <Text style={styles.instructions}>Tap each color once without repeating, then tap each one again to continue increasing score.</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    instructions: {
      maxWidth: '90%',
      color: 'white'
    },
  });
  
  export default Instructions;