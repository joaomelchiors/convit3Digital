import { button, centerGrow } from '@/style';
import { SafeAreaView, Text } from 'react-native';

const eventos = () => {
    return (
        <SafeAreaView style={centerGrow}>
            <Text style={button}>Eventos</Text>
        </SafeAreaView>
    );
};

export default eventos;
