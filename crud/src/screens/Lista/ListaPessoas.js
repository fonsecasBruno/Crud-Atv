import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { Button, Card, Dialog, FAB, MD3Colors, Portal, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function ListaPessoas({navigation, route}) {

    const [pessoas, setPessoas] = useState([
        {
            nome: 'Bruno Fonseca',
            idade: '19',
            matricula: '2221XXXXXX',
            curso: 'ADS',
        }
    ])

    const [showModalExcluirUsuario, setShowModalExcluirUsuario] = useState(false)
    const [pessoaASerExcluida, setPessoaASerExcluida] = useState(null)

    const showModal = () => setShowModalExcluirUsuario(true);
    const hideModal = () => setShowModalExcluirUsuario(false)

    function adicionarPessoa(pessoa) {
        let novaListaPessoas = pessoas
        novaListaPessoas.push(pessoa)
        setPessoas(novaListaPessoas)
    }

    function editarPessoa(pessoaAntiga, novosDados) {
        console.log('PESSOA ANTIGA ->', pessoaAntiga)
        console.log('NOVOS DADOS ->', novosDados)

        const novaListaPessoas = pessoas.map(pessoa =>{
            if (pessoa == pessoaAntiga) {
                return novosDados
            } else {
                return pessoa
            }
        })
        setPessoas(novaListaPessoas)
    }

    function excluirPessoa(pessoa) {
        const novaListaPessoas = pessoas.filter(p => p !== pessoa)
        setPessoas(novaListaPessoas)
        Toast.show({
            type: 'sucess',
            text1: 'Pessoa excluida com sucesso!'
        })
    }

    function handleExcluirPessoa() {
        excluirPessoa(pessoaASerExcluida)
        setPessoaASerExcluida(null)
        hideModal()
    }

  return (
    <View style={styles.container}>
        
    </View>
  )
}

const styles = StyleSheet.create({})