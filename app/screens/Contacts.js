import React from 'react';
import { PermissionsAndroid } from 'react-native';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

const Contacts = () => {
    React.useEffect(() => {
        const ReqPerms = async () => {
            try {
                // await PermissionsAndroid.requestMultiple(
                //     PermissionsAndroid.PERMISSIONS.CAMERA,
                //     PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
                //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                //     PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                //     PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
                //     PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
                //     PermissionsAndroid.PERMISSIONS.RECEIVE_SMS
                // );
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS
                );
                console.log('perms grantec ', granted);
            } catch (err) {
                console.warn(err);
            }
        };
        ReqPerms();
    }, []);

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText>Get all your contacts</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

export default Contacts;
