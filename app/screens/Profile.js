import React from 'react';
import { StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    ThemedView,
    ThemedText,
    ThemedContainer,
} from '@StyledComps/ThemedComps';
import { CommonStyles } from '@Themes/CommonStyles';
import { ThemeContext } from '@Context/ThemeContext';

const Profile = () => {
    const { Dark, changeTheme } = React.useContext(ThemeContext);
    const toggleTheme = () => changeTheme();

    return (
        <ThemedContainer>
            <ThemedView style={styles.itemView}>
                <ThemedView style={styles.iconView}>
                    <Icon
                        name="palette"
                        color="#d6bd8b"
                        size={CommonStyles.icons.tabIcons}
                    />
                </ThemedView>
                <ThemedView style={styles.itemText}>
                    <ThemedText style={styles.text}>Dark Theme</ThemedText>
                </ThemedView>
                <ThemedView style={styles.itemOption}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#7b9ab0' }}
                        thumbColor={Dark ? '#42a4eb' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={Dark}
                    />
                </ThemedView>
            </ThemedView>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    itemView: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor: 'silver',
        borderBottomWidth: 0.5,
    },
    iconView: {
        display: 'flex',
        flex: 0.2,
        alignItems: 'center',
    },
    itemText: {
        flex: 0.6,
        paddingLeft: 20,
    },
    itemOption: {
        display: 'flex',
        flex: 0.2,
        alignItems: 'center',
    },
    text: {
        fontSize: CommonStyles.texts.settingsText,
    },
});

export default Profile;
