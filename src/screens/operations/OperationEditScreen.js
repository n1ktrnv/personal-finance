import React from 'react';
import {StyleSheet} from 'react-native';
import {EditHeader} from '../../components';
import Form from './Form';
import {OperationModel} from '../../models';
import {getTimestamp} from "../../utils";

export default class OperationEditScreen extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.route.params;
        const {amount = '0', account_id, category_id, timestamp} = this.props.route.params;
        let account = this.params.accounts[0];
        let category = this.params.categories[0];
        let date = new Date();
        let time = new Date();
        let type = 'expense';
        if (this.params.id) {
            type = amount < 0 ? 'expense' : 'income';
            account = this.params.accounts.filter((account) => account.id === account_id)[0];
            category = this.params.categories.filter((category) => category.id === category_id)[0];
            date = new Date(timestamp);
            time = new Date(timestamp);
        }
        this.state = {type, amount: Math.abs(amount).toString(), account, category, date, time};
    }

    onDelete = () =>
        OperationModel.delete(this.params.id, this.params.account_id, this.params.amount);

    onApply = () => {
        const account_id = this.state.account.id;
        const category_id = this.state.category.id;
        const amount = this.state.type === 'expense' ? -this.state.amount : this.state.amount;
        const timestamp = getTimestamp(this.state.date, this.state.time);
        const props = {account_id, category_id, amount, timestamp};
        this.params.id ? OperationModel.updateSet({...props, id: this.params.id}, this.params.account_id, this.params.amount) :
            OperationModel.insert(props);
    }

    validate = () =>
        !isNaN(this.state.amount) && this.state.amount !== '0';


    render () {
        return (
            <EditHeader
                title={this.params.id ? 'Редактировать' : 'Создать'}
                alertTitle="Вы уверены, что хотите удалить операцию?"
                onApply={this.onApply}
                onDelete={this.onDelete}
                applyPossible={this.validate()}
                deletePossible={!!this.params.id}
                navigation={this.props.navigation}
            >
                <Form
                    type={this.state.type}
                    amount={this.state.amount}
                    accountName={this.state.account.name}
                    accounts={this.params.accounts}
                    categoryName={this.state.category.name}
                    categories={this.params.categories}
                    date={this.state.date}
                    time={this.state.time}
                    onChangeType = {(type) => this.setState({type})}
                    onChangeAmount={(amount) => this.setState({amount})}
                    onChangeAccount={(account) => this.setState({account})}
                    onChangeCategory={(category) => this.setState({category})}
                    onChangeDate={(date) => this.setState({date})}
                    onChangeTime={(time) => this.setState({time})}
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