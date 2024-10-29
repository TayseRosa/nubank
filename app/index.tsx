import { View, Text } from 'react-native'
import { Logo } from '../components/Logo';
import { CustomButton } from '../components/CustomButton';


export default function Screen(){
    return(
        <View className='h-screen bg-blue-700 justify-center items-center'>
            <Logo />

            <View className='w-full px-5 mt-20'>
                <CustomButton label='Cadastre-se' onPress={()=>{}} />
                <CustomButton label='Faça login' onPress={()=>{}}  />
            </View>
        </View>
    );
}