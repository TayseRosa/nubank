import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// Import your global CSS file
import "../global.css";


export default function RootLayout(){

    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{drawerLabel:'Inicio', headerTitle:'Home', headerShown:false}}
                />

                <Drawer.Screen 
                    name="about"
                    options={{drawerLabel:'About', headerTitle:'About'}}
                />
            </Drawer>
            
        </GestureHandlerRootView>
    )
}