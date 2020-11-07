import React, { useContext, useState } from 'react';
import {
    Pressable,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';
import { SwipeActionView } from 'react-native-action-view';
import Clipboard from '@react-native-community/clipboard';

import {
    ThemedContainer,
    ThemedText,
    ThemedView,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';

const Home = () => {
    const { Theme, themeName } = useContext(ThemeContext);
    const [presText, setPresText] = useState('Press me');
    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };

    /*
        Issues while linking swiperView in android
        https://github.com/wix/react-native-swipe-view
    */

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
                    <ThemedView style={styles.pressView}>
                        <ThemedText style={styles.text}>{presText}</ThemedText>
                    </ThemedView>
                </Pressable>

                <ThemedText>
                    The Text below has been fetched from .env file
                </ThemedText>
                <ThemedText style={styles.configText}>
                    " {Config.SOME_TEXT} "
                </ThemedText>

                <SwipeActionView
                    style={styles.swiperView}
                    rightExpansionSettings={{ buttonIndex: 0 }}
                    leftExpansionSettings={{ buttonIndex: 0 }}
                    rightButtons={[
                        {
                            title: 'Red',
                            color: 'rgb(255, 0, 0)',
                            callback: () => {
                                alert('Red button tapped.');
                            },
                        },
                        {
                            title: 'Green',
                            color: 'rgb(0, 255, 0)',
                            callback: () => {
                                alert('Green button tapped.');
                            },
                        },
                        {
                            title: 'Blue',
                            color: 'rgb(0, 0, 255)',
                            callback: () => {
                                alert('Blue button tapped.');
                            },
                        },
                    ]}
                    leftButtons={[
                        {
                            title: 'Red',
                            color: 'rgb(255, 0, 0)',
                            callback: () => {
                                alert('Red button tapped.');
                            },
                        },
                        {
                            title: 'Green',
                            color: 'rgb(0, 255, 0)',
                            callback: () => {
                                alert('Green button tapped.');
                            },
                        },
                        {
                            title: 'Blue',
                            color: 'rgb(0, 0, 255)',
                            callback: () => {
                                alert('Blue button tapped.');
                            },
                        },
                    ]}
                    leftSwipeSettings={{
                        transition: 'rotate3d',
                        enableSwipeBounces: true,
                    }}
                    rightSwipeSettings={{
                        transition: 'clipCenter',
                        enableSwipeBounces: false,
                    }}
                >
                    <ThemedText>To get started, swipe this view.</ThemedText>
                </SwipeActionView>

                <TouchableOpacity onPress={copyToClipboard}>
                    <ThemedText>Click here to copy to Clipboard</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={fetchCopiedText}>
                    <ThemedText>View copied text</ThemedText>
                </TouchableOpacity>

                <ThemedText style={styles.copiedText}>{copiedText}</ThemedText>
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
    configText: {
        color: 'yellow',
        marginTop: 10,
        marginBottom: 10,
    },
    swiperView: {
        backgroundColor: 'grey',
        padding: 20,
    },
    pressView: {
        borderColor: 'grey',
        padding: 10,
        backgroundColor: 'silver',
        marginBottom: 10,
    },
    copiedText: {
        marginTop: 10,
        color: 'red',
    },
});

export default Home;
