import { Stack } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){    

    return(
        <View style={styles.container}>
            <Stack.Screen options={{
                title:'Início',
                headerRight:()=><Button title="Add" />
            }} />
            <Text>Tela About</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#643a3a',
        borderRadius:6
    },
    button2:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#661b1b',
        borderRadius:6
    }
})