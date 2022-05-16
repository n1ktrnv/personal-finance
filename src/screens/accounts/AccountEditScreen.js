import React from 'react';
import {StyleSheet} from 'react-native';
import {EditHeader} from '../../components';
import Form from "./Form";
import {colors, accountIcons} from '../../res/lists';
import {AccountModel} from '../../models';

export default class AccountEditScreen extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.route.params;
        const {
            name = '',
            balance = 0,
            color = colors[0],
            icon = accountIcons[0]
        } = this.params;
        const negativeBalance = balance < 0;
        this.state = {name, balance: Math.abs(balance).toString(), negativeBalance, icon, color};
    }

    onDelete = () =>
        AccountModel.destroy(this.params.id);

    onApply = () => {
        const balance = this.state.negativeBalance ? -parseInt(this.state.balance) : this.state.balance;
        return this.params.id ? AccountModel.update({...this.state, balance, id: this.params.id}) :
            AccountModel.insert(this.state);
    }

    validate = () =>
        this.state.name.length !== 0 && !isNaN(this.state.balance);

    render () {
        return (
            <EditHeader
                title={this.params.id ? 'Редактировать' : 'Создать'}
                alertTitle="Вы уверены, что хотите удалить счет?"
                alertMessage="Все связанные с ним операции также будут удалены."
                onApply={this.onApply}
                onDelete={this.onDelete}
                applyPossible={this.validate()}
                deletePossible={this.params.deletePossible}
                navigation={this.props.navigation}
            >
                <Form
                    name={this.state.name}
                    balance={this.state.balance}
                    color={this.state.color}
                    icon={this.state.icon}
                    negativeBalance={this.state.negativeBalance}
                    onChangeName={(name) => this.setState({name})}
                    onChangeBalance={(balance) => this.setState({balance})}
                    onChangeColor={(color) => this.setState({color})}
                    onChangeIcon={(icon) => this.setState({icon})}
                    onChangeNegativeBalance={(negativeBalance) =>
                        this.setState({negativeBalance: !this.state.negativeBalance})}
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