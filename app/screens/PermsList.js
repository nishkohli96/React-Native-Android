import React, { useState, useCallback } from 'react';
import { StyleSheet, Linking, Platform } from 'react-native';
import { Button } from 'react-native-material-ui';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import { Snackbar } from 'react-native-paper';

import {
    locationPermission,
    contactsPermission,
    calendarPermission,
} from '@utils/Permissions';
import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
    ThemedView,
} from '@styledComps/ThemedComps';

const PermsList = () => {
    const navigation = useNavigation();
    const [msg, setMsg] = useState(null);
    const [visible, setSbVis] = useState(false);

    const PermDeniedErr = (perm) => {
        setMsg(`${perm} Permission Denied`);
        setSbVis(true);
    };

    const openAppSettings = useCallback(async () => {
        await Linking.openSettings();
    }, []);

    /*  Use this function below, to just get One-Time Position Coords
        Geolocation.getCurrentPosition(); */

    /* Below Method to get position constantly */
    const getUserLocation = async () => {
        try {
            let granted = null;
            if (Platform.OS === 'android') {
                granted = await locationPermission();

                if (granted === 'granted') {
                    navigation.navigate('LocationInfo');
                } else {
                    PermDeniedErr('Location');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    };

    /*  Contacts would be unsorted, we need to sort theme, getting field
        sizes different err, so leaving that for now. Check this link for
        a better implementation of the same -
        https://aboutreact.com/access-contact-list-react-native/
    */
    const getContacts = async () => {
        try {
            if (Platform.OS === 'android') {
                const result = await contactsPermission();
                if (result === 'granted') {
                    navigation.navigate('ContactsList');
                } else {
                    PermDeniedErr('Contacts');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const checkCalendars = async () => {
        try {
            if (Platform.OS === 'android') {
                const result = await calendarPermission();
                if (result) {
                    navigation.navigate('CalendarList');
                } else {
                    PermDeniedErr('Calendar');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    };

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
                        onPress={() => getContacts()}
                    />
                </ThemedView>

                <ThemedView style={styles.btnView}>
                    <Button
                        raised
                        primary
                        text="Location"
                        icon={
                            <Icon
                                name="location-outline"
                                color={'crimson'}
                                size={20}
                                style={styles.icon}
                            />
                        }
                        onPress={() => getUserLocation()}
                    />
                </ThemedView>

                <ThemedView style={styles.btnView}>
                    <Button
                        raised
                        primary
                        text="Calendar"
                        icon={
                            <FontAwesomeI
                                name="calendar"
                                color={'crimson'}
                                size={20}
                                style={styles.icon}
                            />
                        }
                        onPress={() => checkCalendars()}
                    />
                </ThemedView>
            </ThemedSubContainer>

            <Snackbar
                visible={visible}
                onDismiss={() => setSbVis(false)}
                action={{
                    label: 'Enable',
                    onPress: () => openAppSettings(),
                }}
                duration={4000}
            >
                {msg}
            </Snackbar>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    btnView: {
        paddingTop: 20,
        paddingBottom: 20,
        // alignSelf: 'flex-start' /* Scales width as per content size */
    },
    icon: {
        marginRight: 10,
    },
});

export default PermsList;
