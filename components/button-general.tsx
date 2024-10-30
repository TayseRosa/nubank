import { Pressable } from "react-native"
import { Children, ReactNode } from "react"

type Props = {
    children: ReactNode;
    onPress: ()=>void;
}

export const ButtonGeneral = ({ children, onPress }:Props) => {
    return(
        <Pressable onPress={onPress} className="bg-gray-200 rounded-xl p-5" >
            {children}
        </Pressable>
    )
}