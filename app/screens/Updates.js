import React from 'react';
import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

import Config from 'react-native-config';

const Updates = () => {
    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText>
                    The Text below has been fetched from .env file
                </ThemedText>
                <ThemedText> {Config.SOME_TEXT}</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

export default Updates;
