import React, { useContext, useState } from 'react';
import { Pressable, StatusBar, View, StyleSheet } from 'react-native';
import Config from 'react-native-config';

import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';

const Home = () => {
    const { Theme, themeName } = useContext(ThemeContext);
    const [presText, setPresText] = useState('Press me');

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

                <ThemedText>
                    The Text below has been fetched from .env file
                </ThemedText>
                <ThemedText> {Config.SOME_TEXT}</ThemedText>
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
        marginBottom: 10,
    },
});

export default Home;
