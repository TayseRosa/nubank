import { Pressable } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'


type Props = {
    icon: string;
    onPress: ()=>void;
}

export const ButtonIcon = ({ icon, onPress}: Props) => {
    return(
        <Pressable onPress={onPress} className="size-14 bg-white/40 justify-center items-center rounded-full">
            <Icon name={icon} size={18} color="white" />
        </Pressable>
    )
}