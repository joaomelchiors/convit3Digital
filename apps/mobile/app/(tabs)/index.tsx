import Logo from '@/components/templates/Logo';
import { bgBlack, centerGrow, flex1 } from '@/style';
import { ImageBackground } from 'react-native';

export default function Index() {
    return (
        <ImageBackground
            source={require('@/assets/images/background.png')}
            resizeMode="cover"
            style={[centerGrow, bgBlack]}
        >
            <Logo />
        </ImageBackground>
    );
}
