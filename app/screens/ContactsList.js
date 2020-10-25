import React from 'react';
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
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
                if (Platform.OS === 'android') {
                    await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
                    );
                }
                /*  Contacts would be unsorted, we need to sort theme, getting field
                    sizes different err, so leaving that for now. Check this link for
                    a better implementation of the same -
                    https://aboutreact.com/access-contact-list-react-native/
                */
                const res = await Contacts.getAll();
                setContacts(res);
                console.log(JSON.stringify(res[0]));
            } catch (err) {
                console.warn(err);
            }
        };
        ReqPerms();
    }, []);

    if (!contacts) {
        return (
            <ThemedContainer style={styles.loadingView}>
                <ActivityIndicator size={80} color='#00ff00' />
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
                    {contacts.map((contact) => (
                        <ContactItem key={contact.recordID} item={contact} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    loadingView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView: {
        paddingLeft: 30,
        marginTop: 30,
    },
});

export default ContactsList;
