import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {
    ThemedContainer,
    ThemedText,
    ThemedSubContainer,
} from '@styledComps/ThemedComps';

/*
    Refer this package for distances based upon position
    https://github.com/manuelbieh/geolib#readme
*/

const LocationInfo = () => {
    const [currentLatitude, setLatitude] = useState(null);
    const [currentLongitude, setLongitude] = useState(null);
    const [currentSpeed, setSpeed] = useState(null);

    useEffect(() => {
        Geolocation.watchPosition(
            (position) => {
                console.log('Position Obj: ', position);

                setLatitude(JSON.stringify(position.coords.latitude));
                setLongitude(JSON.stringify(position.coords.longitude));
                setSpeed(JSON.stringify(position.coords.speed));
            },
            (error) => {
                console.log(error.message);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000,
            }
        );
    }, [currentLatitude, currentLongitude]);

    return (
        <ThemedContainer>
            <ThemedSubContainer>
                <ThemedText style={{ ...styles.key, ...styles.text }}>
                    Position Info :
                </ThemedText>
                <ThemedText style={styles.text}>
                    ( {currentLatitude}, {currentLongitude} )
                </ThemedText>
                <ThemedText style={{ ...styles.key, ...styles.text }}>
                    Current Speed :
                </ThemedText>
                <ThemedText style={styles.text}>{currentSpeed}</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    key: {
        fontWeight: 'bold',
    },
    text: {
        marginBottom: 10,
    },
});
export default LocationInfo;
