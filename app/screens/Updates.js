import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PermsList from '@screens/PermsList';
import ContactsList from '@screens/ContactsList';
import CalendarList from '@screens/CalendarList';

const Stack = createStackNavigator();

const Updates = () => {
    return (
        <Stack.Navigator initialRouteName="PermsList">
            <Stack.Screen name="PermsList" component={PermsList} />
            <Stack.Screen name="ContactsList" component={ContactsList} />
            <Stack.Screen name="CalendarList" component={CalendarList} />
        </Stack.Navigator>
    );
};

export default Updates;
