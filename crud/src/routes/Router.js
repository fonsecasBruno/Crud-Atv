import { createStackNavigator } from '@react-navigation/stack'
import FormPessoas from '../screens/Form/FormPessoas'
import ListaPessoas from '../screens/Lista/ListaPessoas'

const Stack = createStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator
        screenOptions={{headeShown: false}}
        initialRouteName='ListaPessoas'
    >
        <Stack.Screen name='ListaPessoas' component={ListaPessoas}/>
        <Stack.Screen name='FormPessoas' component={FormPessoas}/>
    </Stack.Navigator>
  )
}

