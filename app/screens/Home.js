import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemedContainer, ThemedText } from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';

const Home = () => {
    const { Theme, themeName } = useContext(ThemeContext);

    return (
        <ThemedContainer>
            <StatusBar
                backgroundColor={Theme.colors.header}
                barStyle={
                    themeName === 'light' ? 'dark-content' : 'light-content'
                }
            />
            <ThemedText> Screen1</ThemedText>
        </ThemedContainer>
    );
};

export default Home;
