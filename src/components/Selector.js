import * as React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import BlockedInput from './BlockedInput';


export default class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.bottomSheet = React.createRef();
    }

    onInputPress = () => {
        this.bottomSheet.current.show();
    }

    onItemPress = (item) => {
        this.props.onChangeValue(item);
        this.bottomSheet.current.close();
    }

    renderItem = (item, index) => {
        return React.cloneElement(
            this.props.renderItem(item),
            {key: index, onPress: () => this.onItemPress(item)}
        );
    }

    render() {
        return (
            <>
                <BlockedInput
                    value={this.props.value}
                    label={this.props.label}
                    onPress={this.onInputPress}
                    style={this.props.style}
                />
                <BottomSheet
                    hasDraggableIcon
                    ref={this.bottomSheet}
                    height={Dimensions.get('window').height / 2}
                    sheetBackgroundColor="white"
                >
                    <ScrollView
                        contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator={false}
                    >
                        {this.props.data.map((item, index) => this.renderItem(item, index))}
                    </ScrollView>
                </BottomSheet>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
});