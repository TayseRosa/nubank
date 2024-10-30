import { View, Text, ScrollView } from 'react-native'
import { Header } from '../components/header';
import { ButtonCard } from '../components/button-card';
import { ButtonAction } from '../components/button-action';


export default function Screen(){
    return(
        <ScrollView className='h-screen bg-white' >
            <Header />
            <ButtonCard title="Conta" onPress={()=>{}} >
                <Text className='text-2xl font-semibold'> R$1.000,00 </Text>
            </ButtonCard>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-3' >
                <ButtonAction icon="pix" label="Pix" onPress={()=>{}} badge="" />
                <ButtonAction icon="barcode" label="Pagar" onPress={()=>{}} badge="" />
                <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" onPress={()=>{}} badge="R$12.300,00" />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={()=>{}} badge="" />
                <ButtonAction icon="receipt" label="Dinheiro" onPress={()=>{}} badge="" />
            </ScrollView>
        </ScrollView>
    );
}