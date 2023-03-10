import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuItems from './MenuItems';
import WriteReview from './WriteReview';

const Drawer = createDrawerNavigator()

const MainScreen = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
                headerStyle: { backgroundColor: '#EE9972' },
                drawerStyle: { backgroundColor: '#FBDABB' },
            }}
        >
            <Drawer.Screen name="Our Menu" component={MenuItems} />
            <Drawer.Screen name="Write Review" component={WriteReview} />
        </Drawer.Navigator>
    );
}

export default MainScreen;