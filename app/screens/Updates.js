import React from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';

const Updates = () => {

    return (
        <View>
            <Text> The Text below has been fetched from .env file</Text>
            <Text> {Config.DUMMY_VAR}</Text>
        </View>
    );
};

export default Updates;
