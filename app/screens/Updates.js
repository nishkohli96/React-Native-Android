import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PermsList from '@screens/PermsList';
import ContactsList from '@permissionScreens/ContactsList';
import LocationInfo from '@permissionScreens/LocationInfo';
import CalendarList from '@permissionScreens/CalendarList';
import Camera from '@permissionScreens/Camera';

const Stack = createStackNavigator();

const Updates = () => {
    return (
        <Stack.Navigator initialRouteName="PermsList">
            <Stack.Screen name="PermsList" component={PermsList} />
            <Stack.Screen name="ContactsList" component={ContactsList} />
            <Stack.Screen name="LocationInfo" component={LocationInfo} />
            <Stack.Screen name="CalendarList" component={CalendarList} />
            <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
    );
};

export default Updates;
