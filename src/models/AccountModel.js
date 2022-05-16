import {BaseModel, types} from 'expo-sqlite-orm';
import db from './db';


export default class AccountModel extends BaseModel {
    static get database() {
        return db;
    }

    static get tableName() {
        return 'accounts';
    }

    static get columnMapping() {
        return {
            id: {type: types.INTEGER, primary_key: true},
            name: {type: types.TEXT, not_null: true},
            order_number: {type: types.INTEGER, not_null: true},
            balance: {type : types.INTEGER, not_null: true},
            color: {type: types.TEXT, not_null: true},
            icon: {type: types.TEXT, not_null: true},
        };
    }

    static select() {
        return this.query({
            columns: '*',
            order: 'order_number'
        });
    }

    static insert(props) {
        this.incrementOrders();
        return this.create({...props, order_number: 1});
    }

    static incrementOrders() {
        this.repository.databaseLayer.executeSql(`
            UPDATE accounts
            SET order_number = order_number + 1;
        `);
    }

    static async updateBalance(id, amount) {
        const balanceInfo = await AccountModel.query({
            columns: 'balance',
            where: {
                id_eq: id
            },
        });
        if (balanceInfo[0].balance + parseInt(amount) > 999999999) {
            await this.repository.databaseLayer.executeSql(`
            UPDATE accounts
            SET balance = 999999999
            WHERE id = ?;
        `, [id]);
        } else if (balanceInfo[0].balance + parseInt(amount) < -999999999) {
            await this.repository.databaseLayer.executeSql(`
            UPDATE accounts
            SET balance = -999999999
            WHERE id = ?;
        `, [id]);
        } else {
            await this.repository.databaseLayer.executeSql(`
            UPDATE accounts
            SET balance = balance + ?
            WHERE id = ?;
        `, [amount, id]);
        }
    }
}