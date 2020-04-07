import React from 'react'
import { Text, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default function Home(props) {
  const { nome, email } = props
  return (
    <>
      <Text
        style={{ alignSelf: 'center' }}
      >{`Bem vindo ${nome} - seu email é ${email}`}</Text>
      <Button title='Logout' onPress={() => Actions.replace('login')} />
    </>
  )
}
