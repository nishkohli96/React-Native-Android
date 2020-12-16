import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PermsList from '@Screens/PermsList';
import ContactsList from '@PermissionScreens/ContactsList';
import LocationInfo from '@PermissionScreens/LocationInfo';
import CalendarList from '@PermissionScreens/CalendarList';
import Camera from '@PermissionScreens/Camera';

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
