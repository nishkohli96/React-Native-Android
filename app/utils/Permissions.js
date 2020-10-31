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
