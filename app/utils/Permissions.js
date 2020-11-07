import { PermissionsAndroid } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const locationPermission = async () => {
    const res = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    return res;
};

export const contactsPermission = async () => {
    const res = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );
    return res;
};

export const calendarPermission = async () => {
    const res = await request(PERMISSIONS.ANDROID.READ_CALENDAR);
    if (res === RESULTS.GRANTED) {
        return true;
    }
    return false;
};

export const cameraPermission = async () => {
    const res = await request(PERMISSIONS.ANDROID.CAMERA);
    if (res === RESULTS.GRANTED) {
        return true;
    }
    return false;
};

export const readStoragePermission = async () => {
    const res = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    if (res === RESULTS.GRANTED) {
        return true;
    }
    return false;
};

export const writeStoragePermission = async () => {
    const res = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    if (res === RESULTS.GRANTED) {
        return true;
    }
    return false;
};
