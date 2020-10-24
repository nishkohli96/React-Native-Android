import React from 'react';
import { Button } from 'react-native-material-ui';
import { createStackNavigator } from '@react-navigation/stack';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import PermsList from '@screens/PermsList';
import Contacts from '@screens/Contacts';

const Stack = createStackNavigator();

const Updates = () => {
    return (
        <Stack.Navigator initialRouteName="PermsList">
            <Stack.Screen name="PermsList" component={PermsList} />
            <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
    );
};

export default Updates;
