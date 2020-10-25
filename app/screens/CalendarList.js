import React, { useEffect } from 'react';

import {
    ThemedView,
    ThemedText,
    ThemedContainer,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

const CalendarList = () => {
    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText> Inside calendar</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

export default CalendarList;
