import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default function Login(props) {
  const [form, setForm] = useState({ email: 'admin', senha: 'senha' })
  const [error, setError] = useState({})

  function handleLogin() {
    const { email, senha } = form
    if (email === 'admin' && senha === 'senha') {
      Actions.replace('home', { nome: 'Admin', email: 'admin' })
    } else {
      Alert.alert('Atenção', 'Usuário ou senha inválido!')
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          marginTop: 50,
          marginBottom: 50,
          alignSelf: 'center',
          fontSize: 40,
        }}
      >
        Login
      </Text>
      <Input
        value={form.email}
        label='Email'
        placeholder='informe seu email'
        errorMessage={error.email && error.email}
        containerStyle={{ marginBottom: 20 }}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <Input
        value={form.senha}
        label='Senha'
        placeholder='informe sua senha'
        errorMessage={error.senha && error.senha}
        containerStyle={{ marginBottom: 20 }}
        onChangeText={(text) => setForm({ ...form, senha: text })}
      />
      <Button title='Login' onPress={handleLogin} />
    </View>
  )
}
