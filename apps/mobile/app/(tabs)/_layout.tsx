import { colors } from '@/style/colors';
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const TabsLayout = () => {
    const optionsTabs = (label: string, icone: string): any => ({
        headerShown: false,
        tabBarLabel: label,
        tabBarActiveTintColor: colors.blue[500],
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarInactiveTintColor: colors.zinc[400],
        tabBarStyle: {
            backgroundColor: colors.zinc[950]
        },

        tabBarIcon: ({ focused }: any) => (
            <AntDesign
                name={icone as any}
                size={24}
                color={focused ? colors.blue[500] : colors.zinc[400]}
            />
        )
    });

    return (
        <Tabs>
            <Tabs.Screen name="index" options={optionsTabs('Início', 'home')} />
            <Tabs.Screen name="eventos" options={optionsTabs('Eventos', 'calendar')} />
        </Tabs>
    );
};

export default TabsLayout;
