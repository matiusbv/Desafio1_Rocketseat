import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Tarefa } from "./components/index";



export default function Home() {

    const [tarefas, setTarefa] = useState<string[]>([])
    const [nomeTarefa, setNomeTarefa] = useState('')
 
    function handleTarefaAdd(){
        if(tarefas.includes(nomeTarefa)){
            return Alert.alert('Tarefa já existe')
        }
        setTarefa(prevState => [...prevState, nomeTarefa ])
        setNomeTarefa('')
    }

    function handleTarefaRemove(tarefas: string){
        Alert.alert("Remover", `Remover o participante ${tarefas}?`, [
            {
              text: 'Sim',
              onPress: () => setTarefa(prevState => prevState.filter(tarefase => tarefase !== tarefas))
            },
            {
              text: 'Não',
              style: 'cancel'
            }

          ])
      
         
        }
  


    return (
        
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>To Do</Text>
                    <AntDesign name="profile" size={50} color="#8a2be2" />
                </View>

                <Text style={styles.tarefaQnt}>Número de Tarefas: {tarefas.length}</Text>

<View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova tarefa"
                    placeholderTextColor='#a3ebf4'
                    onChangeText={setNomeTarefa}
                    value={nomeTarefa}
                    
                />

<TouchableOpacity>

<AntDesign name="pluscircleo" size={50} color="#8a2be2" onPress={handleTarefaAdd} />
</TouchableOpacity>

</View>


<FlatList 
    data={tarefas}
    keyExtractor={item => item}
    renderItem={({item}) => (
        <Tarefa
        key={item}
        tarefas={item}
        onRemove={() => handleTarefaRemove(item)}
        />
  
    
    )}

    showsHorizontalScrollIndicator={false}
    ListEmptyComponent ={() => (
        <Text style={styles.tarefaEmptyText}>
            Você ainda não possui tarefas.
        </Text>

    )}
/>


            </View>
            
      
    )
}