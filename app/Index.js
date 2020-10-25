import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Updates from '@screens/Updates';
import { ThemeContext } from '@context/ThemeContext';
import { CommonStyles } from '@themes/CommonStyles';

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    const { Theme } = useContext(ThemeContext);
    const styles = StyleSheet.create({
        barStyles: {
            backgroundColor: Theme.colors.header,
            padding: 5,
            borderTopWidth: 0.3,
            borderTopColor: 'silver',
        },
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                barStyle={styles.barStyles}
                shifting={false}
                backBehavior='order'
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <Icon
                                name='home'
                                color='#3156c4'
                                size={CommonStyles.icons.tabIcons}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='Comp'
                    component={Updates}
                    options={{
                        tabBarLabel: 'Updates',
                        tabBarIcon: () => (
                            <Icon
                                name='bell'
                                color='#32a84e'
                                size={CommonStyles.icons.tabIcons}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: () => (
                            <Icon
                                name='account'
                                color='#c43140'
                                size={CommonStyles.icons.tabIcons}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Index;
