import React from 'react';
import { PermissionsAndroid, Platform, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
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
                setContacts(res)
                
                // cContacts.getAll((err, contacts) => {
                //     // contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
                //     setContacts(contacts)
                // })

            } catch (err) {
                console.warn(err);
            }
        };
        ReqPerms();
    }, []);

    if(!contacts){
        return (
            <ThemedContainer style={styles.loadingView}>
                <ActivityIndicator size={80} color="#00ff00" />
            </ThemedContainer>
        );
    }

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText>Get all your contacts</ThemedText>
            </ThemedSubContainer>
            <SafeAreaView style={styles.listView}>
                <ScrollView>
                    {
                        contacts.map(contact => 
                            <ContactItem
                                key={contact.recordID}
                                item={contact} 
                            />
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    loadingView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listView: {
        paddingLeft: 30,
        marginTop: 30
    }
});

export default ContactsList;
