import React, { useEffect } from 'react';
import RNCalendarEvents from 'react-native-calendar-events';

import {
    ThemedView,
    ThemedText,
    ThemedContainer,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

const CalendarList = () => {
    useEffect(() => {
        getCalendars();
    }, []);

    const getCalendars = async () => {
        const cals = await RNCalendarEvents.findCalendars();
        console.log('avail cals ', cals);
    };

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText> Inside calendar</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

export default CalendarList;
