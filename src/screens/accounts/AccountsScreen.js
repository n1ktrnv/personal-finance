import React, {useState} from 'react';
import {AccountModel} from '../../models';
import DataScreen from '../DataScreen';
import DraggableDataList from '../DraggableDataList';
import {Account, FAB} from '../../components';
import {screenNames} from '../../navigation/names';


export default function AccountsScreen({navigation}) {
    const [accounts, setAccounts] = useState(null);

    const fetchData = () => AccountModel.select();

    const renderItem = ({name,  balance, color, icon}) =>
        <Account name={name} balance={balance} color={color} icon={icon}/>;

    const onFABPress = () =>
        navigation.navigate(screenNames.AccountEditScreen, {});

    return (
        <DataScreen
            navigation={navigation}
            onChangeData={setAccounts}
            fetchData={fetchData}
        >
            <>
                <DraggableDataList
                    data={accounts}
                    navigation={navigation}
                    model={AccountModel}
                    renderItem={renderItem}
                    editScreen={screenNames.AccountEditScreen}
                    onDragEnd={setAccounts}
                    orderColumn="order_number"
                />
                <FAB label="Создать счет" onPress={onFABPress}/>
            </>
        </DataScreen>
    );
}