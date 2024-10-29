import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleClick = () => {
    alert('Funcionou!!!')
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={handleClick}>
        <Text style={styles.btnText}>
          Tayse Rosa - Dev Mobile React Native!
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width:200,
    height:40,
    backgroundColor:'#8b108f',
    borderRadius:5,
    paddingTop:5
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:12
  }
});
