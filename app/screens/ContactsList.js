import React from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import ContactItem from '@components/ContactItem';

const ContactsList = () => {

    const [contacts, setContacts] = React.useState(null);

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
                if(Platform.OS === 'android') {
                    await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
                    );
                }
                const res = await Contacts.getAll();
                console.log(res[0])
                setContacts(res)

            } catch (err) {
                console.warn(err);
            }
        };
        ReqPerms();
    }, []);

    if(!contacts){
        return <></>;
    }

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText>Get all your contacts</ThemedText>
            </ThemedSubContainer>
            {
                contacts.map(contact => 
                    <ContactItem key={contact.recordID}
                    item={contact} />
                )
            }
        </ThemedContainer>
    );
};

export default ContactsList;
