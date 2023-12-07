import React from 'react';
import { View, Button, Text, Switch, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "green",
          }}
        >
          Snorlax Berrie 
        </Text>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png',
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aquiii!"
      />
      
    </ScrollView>
  );
}

export default Pokemon;