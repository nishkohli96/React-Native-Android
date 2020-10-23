import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Comp from '@components/Comp';
import { AppThemeContext } from '@context/ThemeContext';

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <AppThemeContext>
                <Tab.Navigator
                    initialRouteName="Home"
                    barStyle={styles.barStyles}
                    shifting={false}
                    backBehavior="order"
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: () => (
                                <Icon name="home" color="#3156c4" size={25} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Updates',
                            tabBarIcon: () => (
                                <Icon name="bell" color="#3156c4" size={25} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Comp"
                        component={Comp}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: () => (
                                <Icon
                                    name="account"
                                    color="#3156c4"
                                    size={25}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </AppThemeContext>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    barStyles: {
        backgroundColor: 'beige',
        padding: 5,
        borderTopWidth: 0.3,
        borderTopColor: 'silver',
    },
});

export default Index;
