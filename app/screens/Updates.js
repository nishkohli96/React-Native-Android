import React from 'react';
import { Button } from 'react-native-material-ui';
import { createStackNavigator } from '@react-navigation/stack';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import PermsList from '@screens/PermsList';
import ContactsList from '@screens/ContactsList';

const Stack = createStackNavigator();

const Updates = () => {
    return (
        <Stack.Navigator initialRouteName="PermsList">
            <Stack.Screen name="PermsList" component={PermsList} />
            <Stack.Screen name="ContactsList" component={ContactsList} />
        </Stack.Navigator>
    );
};

export default Updates;
