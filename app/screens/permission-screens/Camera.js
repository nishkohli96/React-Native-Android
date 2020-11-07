import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIconsI from 'react-native-vector-icons/Ionicons';

import { ThemedContainer } from '@styledComps/ThemedComps';

const Camera = () => {
    const navigation = useNavigation();
    const [captureImages, setCaptureImages] = useState([]);

    const onBottomButtonPressed = (event) => {
        const images = JSON.stringify(event.captureImages);
        console.log('cptus ', images);
        if (event.type === 'left') {
            navigation.navigate('PermsList');
        } else if (event.type === 'right') {
            setCaptureImages(images);
        } else {
            console.log('OK Pressed');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedContainer>
                <CameraKitCameraScreen
                    // Buttons to perform action done and cancel
                    actions={{
                        leftButtonText: 'Cancel',
                        rightButtonText: 'Done',
                    }}
                    onBottomButtonPressed={(event) =>
                        onBottomButtonPressed(event)
                    }
                    flashImages={{
                        // Flash button images
                        on: (
                            <IonIconsI
                                name="flash"
                                color={'silver'}
                                size={20}
                            />
                        ),
                        off: (
                            <IonIconsI
                                name="flash-off"
                                color={'silver'}
                                size={20}
                            />
                        ),
                        auto: (
                            <MaterialCommunityIconsI
                                name="flash-auto"
                                color={'silver'}
                                size={20}
                            />
                        ),
                    }}
                    cameraFlipImage={() => (
                        <IonIconsI
                            name="camera-reverse-sharp"
                            color={'silver'}
                            size={20}
                        />
                    )}
                    captureButtonImage={
                        <MaterialCommunityIconsI
                            name="camera-iris"
                            color={'silver'}
                            size={20}
                        />
                    }
                />
            </ThemedContainer>
        </SafeAreaView>
    );
};

export default Camera;
