import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoriesScreen, CategoryEditScreen } from "../screens";
import { screenNames } from './names';

const Stack = createStackNavigator();

class CategoriesNavigation extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={screenNames.CategoriesScreen}
                    component={CategoriesScreen}
                    options={{title: 'Категории'}}
                />
                <Stack.Screen
                    name={screenNames.CategoryEditScreen}
                    component={CategoryEditScreen}
                    options={{title: 'Редактировать'}}
                />
            </Stack.Navigator>
        );
    }
}

export { CategoriesNavigation, screenNames };