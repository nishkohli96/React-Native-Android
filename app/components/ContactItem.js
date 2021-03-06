import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';

import { ThemedView, ThemedText } from '@StyledComps/ThemedComps';
import ContactAvatar from './ContactAvatar';

const getAvatarInitials = (textString) => {
    if (!textString) {
        return '';
    }
    const text = textString.trim();
    const textSplit = text.split(' ');
    if (textSplit.length <= 1) {
        return text.charAt(0);
    }
    const initials =
        textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
    return initials;
};

const ContactItem = (props) => {
    const { item } = props;

    const OpenContact = async () => {
        await Contacts.openExistingContact(props);
        console.log(props);
    };

    return (
        <TouchableOpacity onPress={() => OpenContact()}>
            <ThemedView>
                <ThemedView style={styles.itemContainer}>
                    <ThemedView style={styles.leftElementContainer}>
                        <ContactAvatar
                            img={
                                item.hasThumbnail
                                    ? { uri: item.thumbnailPath }
                                    : undefined
                            }
                            placeholder={getAvatarInitials(
                                `${item.givenName} ${item.familyName}`
                            )}
                            width={40}
                            height={40}
                        />
                    </ThemedView>
                    <ThemedView style={styles.rightSectionContainer}>
                        <ThemedView style={styles.mainTitleContainer}>
                            <ThemedText
                                style={styles.titleStyle}
                            >{`${item.givenName} ${item.familyName}`}</ThemedText>
                            {item.phoneNumbers === undefined ? (
                                <></>
                            ) : (
                                <ThemedText>
                                    ( {`${item.phoneNumbers.number}`} )
                                </ThemedText>
                            )}
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        minHeight: 44,
        height: 63,
    },
    leftElementContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        paddingLeft: 13,
    },
    rightSectionContainer: {
        marginLeft: 18,
        flexDirection: 'row',
        flex: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#515151',
    },
    mainTitleContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    titleStyle: {
        fontSize: 16,
    },
});

export default memo(ContactItem);
