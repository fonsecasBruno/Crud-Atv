import { StyleSheet, FlatList, View } from 'react-native'
import React, {useState} from 'react'
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
        
        <Text variant='titleLarge' style={styles.title}>Lista de Pessoas</Text>

        <FlatList
            style={styles.container}
            data={pessoas}
            renderItem={({ item }) => (
                <Card
                    mode='outlined'
                    style={styles.card}
                >
                    <Card.Content
                        style={styles.CardContent}
                    >

                        <View>
                            <Text variant='titleMedium'>{item?.nome}</Text>
                            <Text variant='bodyLarge'>Idade: {item?.idade}</Text>
                            <Text variant='bodyLarge'>Matricula: {item?.matricula}</Text>
                            <Text variant='bodyLarge'>Curso:{item?.curso}</Text>
                        </View>

                    </Card.Content>

                    <Card.Actions>
                        <Button onPress={() => navigation.push('FormPessoas', {acao: editarPessoa, pessoa: item})}>Editar</Button>
                        <Button onPress={() => {pessoaASerExcluida(item)
                        showModal()
                        }}>Excluir</Button>
                    </Card.Actions>

                </Card>
            )}
        />

        <FAB
            icon='plus'
            style={styles.fab}
            onPress={() => navigation.push('FormPessoas', {acao: adicionarPessoa})}
        />

    </View>
  )
}

const styles = StyleSheet.create({})