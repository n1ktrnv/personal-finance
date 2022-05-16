import React, {useState} from 'react';
import {CategoryModel} from '../../models';
import DataScreen from '../DataScreen';
import {screenNames} from "../../navigation/names";
import DraggableDataList from "../DraggableDataList";
import {Category, FAB} from '../../components';


export default function CategoriesScreen({navigation}) {
    const [categories, setCategories] = useState(null);

    const fetchData = () => CategoryModel.select();

    const renderItem = ({name, color, icon}) =>
        <Category name={name} color={color} icon={icon}/>;

    const onFABPress = () =>
        navigation.navigate(screenNames.CategoryEditScreen, {});

    return (
        <DataScreen
            navigation={navigation}
            onChangeData={setCategories}
            fetchData={fetchData}
        >
            <>
                <DraggableDataList
                    data={categories}
                    navigation={navigation}
                    model={CategoryModel}
                    renderItem={renderItem}
                    editScreen={screenNames.CategoryEditScreen}
                    onDragEnd={setCategories}
                    orderColumn="order_number"
                />
                <FAB label="Создать категорию" onPress={onFABPress}/>
            </>
        </DataScreen>
    );
}