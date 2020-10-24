import React, { useContext, useState } from 'react';
import { Pressable, StatusBar, View, StyleSheet } from 'react-native';
import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';

const Home = () => {
    const { Theme, themeName } = useContext(ThemeContext);
    const [presText, setPresText] = useState('Press me');

    // React.useEffect(() => {
    //     const ReqPerms = async() => {
    //         try {
    //             // await PermissionsAndroid.requestMultiple(
    //             //     PermissionsAndroid.PERMISSIONS.CAMERA,
    //             //     PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
    //             //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    //             //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             //     PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    //             //     PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
    //             //     PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
    //             //     PermissionsAndroid.PERMISSIONS.RECEIVE_SMS
    //             // );
    //             const granted = await PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.CAMERA,
    //                 {
    //                   title: "Cool Photo App Camera Permission",
    //                   message:
    //                     "Cool Photo App needs access to your camera " +
    //                     "so you can take awesome pictures.",
    //                   buttonNeutral: "Ask Me Later",
    //                   buttonNegative: "Cancel",
    //                   buttonPositive: "OK"
    //                 }
    //               );
    //             console.log('perms grantec ',granted)
    //         }
    //         catch (err) {
    //             console.warn(err);
    //         }
    //     } 
    //     ReqPerms();
    // },[]);

    return (
        <ThemedContainer>
            <StatusBar
                backgroundColor={Theme.colors.header}
                barStyle={
                    themeName === 'light' ? 'dark-content' : 'light-content'
                }
            />
            <ThemedSubContainer>
                <ThemedText style={styles.headerText}>
                    Click The Appropriate Btn to see their functionality
                </ThemedText>

                <Pressable
                    onPressIn={() => setPresText('normal press')}
                    onPressOut={() => setPresText('Press Me')}
                    onLongPress={() => setPresText('On Long Press...')}
                >
                    <View style={styles.pressView}>
                        <ThemedText style={styles.text}>{presText}</ThemedText>
                    </View>
                </Pressable>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        color: 'crimson',
        marginBottom: 20,
    },
    text: {
        color: 'red',
    },
    pressView: {
        borderColor: 'grey',
        padding: 10,
        backgroundColor: 'silver',
    },
});

export default Home;
