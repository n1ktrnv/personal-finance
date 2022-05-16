import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountsScreen, AccountEditScreen } from "../screens";
import { screenNames } from './names';


const Stack = createStackNavigator();

class AccountsNavigation extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={screenNames.AccountsScreen}
                    component={AccountsScreen}
                    options={{title: 'Счета'}}
                />

                <Stack.Screen
                    name={screenNames.AccountEditScreen}
                    component={AccountEditScreen}
                    options={{title: 'Редактировать'}}
                />
            </Stack.Navigator>
        );
    }
}

export { AccountsNavigation, screenNames };