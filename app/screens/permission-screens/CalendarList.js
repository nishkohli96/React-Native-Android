import React, { useEffect } from 'react';
import RNCalendarEvents from 'react-native-calendar-events';

import {
    ThemedText,
    ThemedContainer,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

/*
    Refer here
    https://github.com/wmcmahan/react-native-calendar-events#Calendar-options
*/

const CalendarList = () => {
    useEffect(() => {
        getCalendars();
    }, []);

    const getCalendars = async () => {
        const cals = await RNCalendarEvents.findCalendars();
        console.log('avail cals ', cals);

        const cal = {
            name: "Nish's Calendar",
            title: 'Event created by nish',
            color: '#006699',
            entityType: 'event',
            accessLevel: 'read',
            ownerAccount: 'nishkohli96@gmail.com',
        };

        // const res = await RNCalendarEvents.saveCalendar(cal);
        // console.log('cal created ',res)
        // RNCalendarEvents.saveEvent('Title of event', {
        //     calendarId: '1',
        //     startDate: '2020-11-01T19:26:00.000Z',
        //     endDate: '2020-11-01T19:46:00.000Z'
        // })
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
