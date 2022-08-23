import {View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';


type Props ={
    tarefas: string
    onRemove: () => void
}


export function Tarefa({tarefas, onRemove}: Props){
    return (
        <View style={styles.container}>

            <Text style={styles.texto}>{tarefas}</Text>


            <TouchableOpacity >

            <Ionicons style={styles.trash} name="md-trash-bin-outline" size={30}  color="#ff0000" onPress={onRemove} />

            </TouchableOpacity>
        </View>
    )
}