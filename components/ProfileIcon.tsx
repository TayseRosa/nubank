import { Text, Pressable } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome'

export const ProfileIcon = () => {
    return(
        <Pressable className="size-14 bg-white/40 justify-center items-center rounded-full">
            <Icon name="user" size={18} color="white" />
        </Pressable>
    )
}