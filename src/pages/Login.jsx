import { useState } from "react"
import { Button, View, StyleSheet, TextInput, Text } from "react-native"

const styles = StyleSheet.create({
    form: {
        margin: 12
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        marginBottom: 10
    }
})

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = () => {
        console.log(`Email: ${email} y Password: ${password}`)
    }

  return (
    <View style={styles.form} >
        <Text>Email: </Text>
        <TextInput 
            style={styles.input}
            name='email'
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
        />
        <Text>Password: </Text>
        <TextInput 
            style={styles.input}
            name='password'
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <Button onPress={handleSubmit} title='Log In'></Button>
    </View>
  )
}

export default Login
