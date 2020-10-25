import React, { useEffect } from 'react';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import RNCalendarEvents from 'react-native-calendar-events';

import {
    ThemedView,
    ThemedText,
    ThemedContainer,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

const CalendarList = () => {
    useEffect(() => {
        const checkCalenderPerms = () => {
            check(PERMISSIONS.ANDROID.READ_CALENDAR)
                .then((result) => {
                    switch (result) {
                        case RESULTS.DENIED: {
                            request(PERMISSIONS.ANDROID.READ_CALENDAR).then(res => {
                                if(res === 'granted'){
                                    getCalendars();
                                }
                            })
                        }
                        break;
                        
                        case RESULTS.GRANTED:
                            getCalendars();
                        break;
                    }
                })
                .catch((error) => {
                    console.log('Calendar Permission err : ', error);
                });
        };

        checkCalenderPerms();
    }, []);

    const getCalendars = async() => {
        const cals = await RNCalendarEvents.findCalendars();
        console.log('avail cals ',cals)
    }

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText> Inside calendar</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

export default CalendarList;
