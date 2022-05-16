import React, {useState} from 'react';
import {AccountModel, CategoryModel, OperationModel} from '../../models';
import DataScreen from '../DataScreen';
import {Text} from "react-native-paper";
import {StyleSheet, View, ScrollView} from 'react-native';
import styling from '../../res/styling';
import {fullFormatDate, groupBy} from '../../utils';
import {FAB, Operation} from '../../components';
import {screenNames} from "../../navigation/names";


export default function OperationsScreen({navigation}) {
    const [operations, setOperations] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [categories, setCategories] = useState(null);

    const fetchData = async () => {
        return {
            operations: await OperationModel.select(),
            accounts: await AccountModel.select(),
            categories: await CategoryModel.select()
        };
    };

    const onChangeData = ({operations, accounts, categories}) => {
        setOperations(operations);
        setAccounts(accounts);
        setCategories(categories);
    }

    const renderOperation = (operation, index) => {
        return (
            <Operation
                key={index}
                name={operation.category}
                color={operation.color}
                icon={operation.icon}
                amount={operation.amount}
                account={operation.account}
                onPress={() => onOperationPress(operation)}
            />
        );
    };

    const renderDateOperations = (groupedOperations, date, index) => {
        return (
            <View key={index}>
                <Text style={styles.date}>{fullFormatDate(new Date(date))}</Text>
                {groupedOperations[date].map(
                    (operation, index) => renderOperation(operation, index)
                )}
            </View>
        );
    };

    const renderOperations = () => {
        const groupedOperations = groupBy('date')(operations);
        return Object.keys(groupedOperations).map((date, index) =>
            renderDateOperations(groupedOperations, date, index)
        );
    };

    const onOperationPress = (operation) => {
        const params = {
            ...operation,
            accounts,
            categories
        }
        navigation.navigate(screenNames.OperationEditScreen, params);
    }

    const onFABPress = () =>
        navigation.navigate(screenNames.OperationEditScreen, {accounts, categories});

    return (
        <DataScreen
            navigation={navigation}
            onChangeData={onChangeData}
            fetchData={fetchData}
        >
            <>
                {
                    operations && operations.length !== 0 ?
                        <ScrollView>
                            {renderOperations()}
                        </ScrollView>
                        :
                        <View style={styles.container}>
                            <Text style={styling.text}>У вас нет операций</Text>
                        </View>
                }
                <FAB label="Новая операция" onPress={onFABPress}/>
            </>
        </DataScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {...styling.boldText, ...{
        marginHorizontal: 24,
        marginTop: 20,
        marginBottom: 16,
        fontSize: 18,
    }}
});