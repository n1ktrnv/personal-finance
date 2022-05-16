import React from 'react';
import {Vibration} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';


export default class DraggableDataList extends React.Component {
    updateOrders = (data) => {
        data.forEach((item, index) => {
            const props = {
                id: item.id,
                [this.props.orderColumn]: index + 1
            };
            this.props.model.update(props);
        });
    }

    onItemPress = (item) => {
        let params = {deletePossible: true, ...item};
        if (this.props.data.length === 1) {
            params = {deletePossible: false, ...item};
        }
        this.props.navigation.navigate(this.props.editScreen, params);
    }

    onItemLongPress = (drag) => {
        Vibration.vibrate(50);
        drag();
    }

    onDragEnd = (data) => {
        this.updateOrders(data)
        this.props.onDragEnd(data);
    }

    renderItem = ({item, drag}) => {
        return React.cloneElement(
            this.props.renderItem(item),
            {
                onPress: () => this.onItemPress(item),
                onLongPress: () => this.onItemLongPress(drag)}
        );
    }

    render() {
        return (
            <DraggableFlatList
                data={this.props.data}
                onDragEnd={({data}) => this.onDragEnd(data)}
                keyExtractor={(item) => item.id}
                renderItem={this.renderItem}
            />
        );
    }
}