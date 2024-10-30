import { View, Text, ScrollView } from 'react-native'
import { Header } from '../components/header';
import { ButtonCard } from '../components/button-card';
import { ButtonAction } from '../components/button-action';
import { ButtonGeneral } from '../components/button-general';
import Icon from '@expo/vector-icons/FontAwesome6';


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

            <View className='px-4 py-6'>
                <ButtonGeneral onPress={()=>{}}  >
                    <View className='flex-row items-center'>
                        <Icon name="credit-card" size={28} color="black" />
                        <Text className='ml-4 text-lg font-semibold'>Meus cartões</Text>
                    </View>
                </ButtonGeneral>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-4' >
                <View className='w-72 mr-4'>
                    <ButtonGeneral onPress={()=>{}} >
                        <View className='flex-row flex-wrap gap-x-1'>
                            <Text>Você tem</Text>
                            <Text className='font-semibold'>R$12.300,00</Text>
                            <Text>disponíveis para empréstimo.</Text>
                        </View>
                    </ButtonGeneral>
                </View>

                <View className='w-72 mr-4'>
                    <ButtonGeneral onPress={()=>{}} >
                        <View className='flex-row flex-wrap gap-x-1'>
                            <Text className='font-semibold text-nubank'>Guarde seu dinheiro aqui</Text>
                            <Text>Toque para saber mais.</Text>
                        </View>
                    </ButtonGeneral>
                </View>
            </ScrollView>

        </ScrollView>
    );
}