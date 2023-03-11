import React, { useState, } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, ImageBackground, } from
'react-native';

import { Participant } from '../../components/Participants';

import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantsName] = useState ('')

    function handleParticipantAdd(){
      if(participants.includes(participantName)){
        return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
      }
      setParticipants(prevState => [...prevState, participantName]);
      setParticipantsName('');
    }

    function handleParticipantRemove(name: string){
      


      Alert.alert("Remover participante", `Remover o participante ${name}?` , [
        {
          text: 'Não',
          style: 'cancel'
        },

        {
          text: 'Sim',
          onPress: () => setParticipants(prevState => prevState.filter(Participant => Participant !== name))
        }
      ]);

    }

 
  return (
<View style={styles.container}>
    <Text style={styles.eventname} >
      Projeto Teste
    </Text> 

    <Text style={styles.eventdate}>
      Sexta, 25 de fervereiro de 2023
    </Text>

    <View style={styles.form}>
        <TextInput 
          style={styles.Input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantsName}
          value={participantName}
        />

        <TouchableOpacity 
         style= {styles.button} 
         onPress={handleParticipantAdd}>

            <Text style= {styles.buttonText}>
             +
            </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText} >
            Ninguem chegou no evento ainda Adicione participantes a sua lista de presença
          </Text>
        )}
      />
    </View>
  );
}


