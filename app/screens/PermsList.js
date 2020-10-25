import React, { useState } from 'react';
import { StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { Button } from 'react-native-material-ui';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import { Snackbar } from 'react-native-paper';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
    ThemedView,
} from '@styledComps/ThemedComps';

const PermsList = () => {
    const navigation = useNavigation();
    const [msg,setMsg] =  useState(null);
    const [visible, setSbVis] = useState(false);

    const getUserLocation = async () => {
        try {
            let granted = null;
            if (Platform.OS === 'android') {
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted) {
                    /* Use this function below, to just get One-Time Position Coords
                       Geolocation.getCurrentPosition();*/

                    /* Below Method to get position constantly */
                    Geolocation.watchPosition(
                        (position) => {
                            console.log('Position Obj: ', position);

                            const currentLongitude = JSON.stringify(
                                position.coords.longitude
                            );
                            const currentLatitude = JSON.stringify(
                                position.coords.latitude
                            );
                            console.log(
                                'Position Coords: ( ' +
                                    currentLatitude +
                                    ' , ' +
                                    currentLongitude +
                                    ' )'
                            );
                        },
                        (error) => {
                            console.log(error.message);
                        },
                        {
                            enableHighAccuracy: false,
                            maximumAge: 1000,
                        }
                    );
                }
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getContacts = async() => {
        try {
            if (Platform.OS === 'android') {
                const result = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS
                );
                if(result === 'granted'){
                /*  Contacts would be unsorted, we need to sort theme, getting field
                    sizes different err, so leaving that for now. Check this link for
                    a better implementation of the same -
                    https://aboutreact.com/access-contact-list-react-native/
                */
                    navigation.navigate('ContactsList');
                }
                else {
                    setMsg('Permission Denied');
                    setSbVis(true);
                }
            }
            
        } catch (err) {
            console.warn(err);
        }
    }

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
                        onPress={() => navigation.navigate('CalendarList')}
                    />
                </ThemedView>
            </ThemedSubContainer>

            <Snackbar 
                    visible = {visible} 
                    onDismiss = {() => setSbVis(false) }
                    action={{
                        label: 'Enable',
                        onPress: () => {
                          console.log('ld')
                        },
                    }}
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
