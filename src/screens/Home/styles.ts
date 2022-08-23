import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

container: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 40
},

textTitle: {
    color: '#2ff',
    fontSize: 35,
    fontWeight: "bold",
    marginRight: 20
},

title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    marginBottom: 40
    
},

input:{
    backgroundColor: '#0000',
    borderColor: '#8a2be2',
    borderWidth: 2,
    height: 60,
    width: 300,
    marginRight: 12,
    color:'#2ff',
    padding: 15
},

form:{
  width: '100%',
  flexDirection: 'row',
marginBottom: 20

},

tarefaEmptyText:{
    color: '#2ff'
},

tarefaQnt:{
    color: '#2ff',
    fontSize: 18,
    paddingBottom: 10
}


})