import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OperationsScreen, OperationEditScreen } from "../screens";
import { screenNames } from './names';

const Stack = createStackNavigator();

class OperationsNavigation extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={screenNames.OperationsScreen}
                    component={OperationsScreen}
                    options={{title: 'Операции'}}
                />
                <Stack.Screen
                    name={screenNames.OperationEditScreen}
                    component={OperationEditScreen}
                    options={{title: 'Редактировать'}}
                />
            </Stack.Navigator>
        );
    }
}

export { OperationsNavigation, screenNames };