import React, { useContext, useState } from 'react';
import { Pressable, StatusBar, StyleSheet } from 'react-native';
import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
    ThemedView,
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
                    onPress={() => setPresText('normal press') }
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'silver',
                        },
                        styles.wrapperCustom,
                    ]}
                >
                    {({ pressed }) => (
                        <ThemedText style={styles.text}>
                            {pressed ? presText : 'Press Me'}
                        </ThemedText>
                    )}
                </Pressable>
                
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        color: 'crimson',
        marginBottom: 20
    },
    text: {
        color: 'red'
    }
});

export default Home;
