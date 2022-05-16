import React from 'react';
import {StyleSheet} from 'react-native';
import {EditHeader} from '../../components';
import Form from "./Form";
import {colors, categoryIcons} from '../../res/lists';
import {CategoryModel} from '../../models';

export default class CategoryEditScreen extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.route.params;
        const {
            name = '',
            color = colors[0],
            icon = categoryIcons[0]
        } = this.params;
        this.state = {name, icon, color};
    }

    onDelete = () =>
        CategoryModel.destroy(this.params.id);

    onApply = () =>
        this.params.id ? CategoryModel.update({...this.state, id: this.params.id}) :
            CategoryModel.insert(this.state);

    validate = () => this.state.name.length !== 0;

    render () {
        return (
            <EditHeader
                title={this.params.id ? 'Редактировать' : 'Создать'}
                alertTitle="Вы уверены, что хотите удалить категорию?"
                alertMessage="Все связанные с ней операции также будут удалены."
                onApply={this.onApply}
                onDelete={this.onDelete}
                applyPossible={this.validate()}
                deletePossible={this.params.deletePossible}
                navigation={this.props.navigation}
            >
                <Form
                    name={this.state.name}
                    color={this.state.color}
                    icon={this.state.icon}
                    onChangeName={(name) => this.setState({name})}
                    onChangeColor={(color) => this.setState({color})}
                    onChangeIcon={(icon) => this.setState({icon})}
                />
            </EditHeader>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 16,
    },
});