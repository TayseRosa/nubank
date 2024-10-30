import { Children, ReactNode } from "react";
import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

type Props = {
    title: string;
    onPress: ()=>void;
    children: ReactNode;
}

export const ButtonCard = ({ title, onPress, children }:Props) => {
    return(
        <Pressable onPress={onPress} className="p-4 py-8" >
            <View className="mb-4 flex-row justify-between items-center " >
                <Text className="text-2xl font-semibold"> {title} </Text>
                <View className="mr-3">
                    <Icon name="chevron-right" size={16} color="#000"  />
                </View>
            </View>

            {children}

        </Pressable>
    )

}