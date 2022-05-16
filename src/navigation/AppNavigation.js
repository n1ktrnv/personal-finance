import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AccountsNavigation } from './AccountsNavigation';
import { OperationsNavigation } from './OperationsNavigation';
import { CategoriesNavigation } from './CategoriesNavigation';
import colors from "../res/colors";
import { navigationNames } from './names';

const BottomTab = createMaterialBottomTabNavigator();

class AppNavigation extends React.Component {
    tabs = {
        [navigationNames.AccountsNavigation]: {
            icon: 'credit-card-outline',
            tabBarLabel: 'Счета',
        },
        [navigationNames.OperationsNavigation]: {
            icon: 'card-text',
            tabBarLabel: 'Операции',
        },
        [navigationNames.CategoriesNavigation]: {
            icon: 'format-list-bulleted-type',
            tabBarLabel: 'Категории',
        },
    };

    screenOptions = ({route}) => ({
        tabBarIcon: ({ color }) => (
            <Icon name={(this.tabs)[route.name].icon} color={color} size={24}/>
        ),
        tabBarLabel: (this.tabs)[route.name].tabBarLabel,
    });

    render() {
        return (
            <BottomTab.Navigator
                backBehavior="none"
                activeColor={colors.primary}
                inactiveColor={colors.grey50}
                barStyle={{backgroundColor: '#FFFFFF'}}
                screenOptions={this.screenOptions}
            >
                <BottomTab.Screen name={navigationNames.AccountsNavigation} component={AccountsNavigation}/>
                <BottomTab.Screen name={navigationNames.OperationsNavigation} component={OperationsNavigation}/>
                <BottomTab.Screen name={navigationNames.CategoriesNavigation} component={CategoriesNavigation}/>
            </BottomTab.Navigator>
        );
    }
}

export { AppNavigation, navigationNames };