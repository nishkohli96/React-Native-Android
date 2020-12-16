import React, { useState, useCallback } from 'react';
import {
    StyleSheet,
    Linking,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import { Button } from 'react-native-material-ui';
import { useNavigation } from '@react-navigation/native';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import { Snackbar } from 'react-native-paper';

import * as Permissions from '@Utils/Permissions';
import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
    ThemedView,
} from '@StyledComps/ThemedComps';

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
                granted = await Permissions.locationPermission();

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    navigation.navigate('LocationInfo');
                } else {
                    PermDeniedErr('Location');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    };

    /*  Contacts would be unsorted, we need to sort them, read more at
        https://aboutreact.com/access-contact-list-react-native/
    */
    const getContacts = async () => {
        try {
            if (Platform.OS === 'android') {
                const result = await Permissions.contactsPermission();
                if (result === PermissionsAndroid.RESULTS.GRANTED) {
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
                const result = await Permissions.calendarPermission();
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

    const openCamera = async () => {
        try {
            if (Platform.OS === 'android') {
                if (await Permissions.cameraPermission()) {
                    if (await Permissions.readStoragePermission()) {
                        if (await Permissions.writeStoragePermission()) {
                            navigation.navigate('Camera');
                        } else {
                            PermDeniedErr('Write Storage');
                        }
                    } else {
                        PermDeniedErr('Read Storage');
                    }
                } else {
                    PermDeniedErr('Camera');
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
                        icon={
                            <AntDesignI
                                name="contacts"
                                color={'crimson'}
                                size={20}
                                style={styles.icon}
                            />
                        }
                        onPress={() => getContacts()}
                    />
                </ThemedView>

                <ThemedView style={styles.btnView}>
                    <Button
                        raised
                        primary
                        text="Location"
                        icon={
                            <IoniconsI
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

                <ThemedView style={styles.btnView}>
                    <Button
                        raised
                        primary
                        text="Camera"
                        icon={
                            <FontAwesomeI
                                name="camera"
                                color={'crimson'}
                                size={20}
                                style={styles.icon}
                            />
                        }
                        onPress={() => openCamera()}
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
