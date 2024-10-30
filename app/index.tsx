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

            {/*Conta (Saldo)*/}
            <ButtonCard title="Conta" onPress={()=>{}} >
                <Text className='text-2xl font-semibold'> R$1.356,98 </Text>
            </ButtonCard>

            {/*Main icons (pix, pagar etc..)*/}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-3' >
                <ButtonAction icon="pix" label="Pix" onPress={()=>alert('Você clicou em PIX')} badge="" />
                <ButtonAction icon="barcode" label="Pagar" onPress={()=>alert('Você clicou em PAGAR')} badge="" />
                <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" onPress={()=>alert('Você clicou em PEGAR EMPRESTADO')} badge="R$12.300,00" />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={()=>alert('Você clicou em TRANSFERIR')} badge="" />
                <ButtonAction icon="receipt" label="Dinheiro" onPress={()=>alert('Você clicou em DINHEIRO')} badge="" />
            </ScrollView>

            {/*Meus Cartões*/}
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

            {/*Divisor*/}
            <View className='h-1 bg-gray-100 mt-8 mx-4'></View>

            <ButtonCard title="Cartão de crédito" onPress={()=>{}} >
                <Text className='text-xl text-gray-500'>Fatura atual</Text>
                <Text className='text-2xl font-semibold' >R$ 1.094,00</Text>
                <Text className='text-xl text-gray-500'>Limite disponível: R$15.000,00</Text>
            </ButtonCard>

        </ScrollView>
    );
}