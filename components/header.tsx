import { SafeAreaView, Text, View } from "react-native"
import { ProfileIcon } from "./ProfileIcon"
import { ButtonIcon } from "./button-icon"

export const Header = () => {
    return(
        <SafeAreaView className="bg-nubank text-white pt-10">
            <View className="flex-row justify-between px-4">
                <ProfileIcon />
                <View className="flex-row justify-between">
                    <ButtonIcon icon="eye-slash" onPress={()=>{}} />
                    <ButtonIcon icon="circle-question" onPress={()=>{}} />
                    <ButtonIcon icon="message" onPress={()=>{}} />
                </View>
            </View>
            <View className="px-4 py-7">
                <Text className="text-white text-bold text-2xl">Olá, Gabriela</Text>
            </View>
        </SafeAreaView>
    )
}