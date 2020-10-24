import React, { useState, useEffect } from 'react';
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
} from 'react-native';
import Contacts from 'react-native-contacts';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import ContactItem from '@components/ContactItem';

const ContactList = () => {
    let [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            ).then(() => {
                loadContacts();
            });
        } else {
            loadContacts();
        }
    }, []);

    const loadContacts = () => {
        Contacts.getAll((err, contacts) => {
            contacts.sort(
                (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase()
            );
            console.log('contacts -> ', contacts);
            if (err === 'denied') {
                alert('Permission to access contacts was denied');
                console.warn('Permission to access contacts was denied');
            } else {
                setContacts(contacts);
                console.log('contacts', contacts);
            }
        });
    };

    // const search = (text) => {
    //     const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    //     if (text === '' || text === null) {
    //         loadContacts();
    //     } else if (phoneNumberRegex.test(text)) {
    //         Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
    //             contacts.sort(
    //                 (a, b) =>
    //                     a.givenName.toLowerCase() > b.givenName.toLowerCase()
    //             );
    //             setContacts(contacts);
    //             console.log('contacts', contacts);
    //         });
    //     } else {
    //         Contacts.getContactsMatchingString(text, (err, contacts) => {
    //             contacts.sort(
    //                 (a, b) =>
    //                     a.givenName.toLowerCase() > b.givenName.toLowerCase()
    //             );
    //             setContacts(contacts);
    //             console.log('contacts', contacts);
    //         });
    //     }
    // };

    // const openContact = (contact) => {
    //     console.log(JSON.stringify(contact));
    //     Contacts.openExistingContact(contact, () => {});
    // };

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText>Get all your contacts</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
    },
    header: {
        backgroundColor: '#4591ed',
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 20,
    },
    searchBar: {
        backgroundColor: '#f0eded',
        paddingHorizontal: 30,
        // paddingVertical: Platform.OS === 'android' ? undefined : 15,
    },
});

export default ContactList;
