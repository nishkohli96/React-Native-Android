import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import { useNavigation } from '@react-navigation/native';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
    ThemedView,
} from '@styledComps/ThemedComps';

const PermsList = () => {
    const navigation = useNavigation();

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText>
                    Click any of the below buttons to check related android
                    permissions
                </ThemedText>

                <ThemedView style={styles.btnView}>
                    <Button
                        raised
                        primary
                        text="Contacts"
                        onPress={() => navigation.navigate('Contacts')}
                    />
                </ThemedView>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    btnView: {
        paddingTop: 20,
        paddingBottom: 20,
    },
});

export default PermsList;
