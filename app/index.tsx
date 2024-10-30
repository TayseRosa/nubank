import { View, Text, ScrollView } from 'react-native'
import { Header } from '../components/header';
import { ButtonCard } from '../components/button-card';


export default function Screen(){
    return(
        <ScrollView className='h-screen bg-white' >
            <Header />
            <ButtonCard title="Conta" onPress={()=>{}} >
                <Text className='text-2xl font-semibold'> R$1.000,00 </Text>
            </ButtonCard>
        </ScrollView>
    );
}