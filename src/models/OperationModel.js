import { BaseModel, types } from 'expo-sqlite-orm';
import db from './db';
import AccountModel from "./AccountModel";


export default class OperationModel extends BaseModel {
    static get database() {
        return db;
    }

    static get tableName() {
        return 'operations';
    }

    static get columnMapping() {
        return {
            id: {type: types.INTEGER, primary_key: true},
            timestamp: {type: types.INTEGER, not_null: true},
            amount: {type: types.INTEGER, not_null: true},
            account_id: {type: types.INTEGER, not_null: true},
            category_id: {type: types.INTEGER, not_null: true},
        };
    }

    static select() {
        const sql = `
            SELECT 
                o.*,
                strftime('%Y-%m-%d', datetime(timestamp / 1000, 'unixepoch')) date,
                a.name account,
                a.id account_id,
                c.name category,
                c.id category_id,
                c.color,
                c.icon
            FROM operations o
            JOIN accounts a
            ON (o.account_id = a.id)
            JOIN categories c
            ON (o.category_id = c.id)
            ORDER BY o.timestamp DESC;
        `;
        return this.repository.databaseLayer.executeSql(sql).then(({ rows }) => rows);
    }

    static insert(props) {
        AccountModel.updateBalance(props.account_id, props.amount);
        this.create(props);
    }

    static delete(id, account_id, amount) {
        AccountModel.updateBalance(account_id, -amount);
        this.destroy(id);
    }

    static updateSet(obj, oldAccountId, oldAmount) {
        AccountModel.updateBalance(oldAccountId, -oldAmount);
        AccountModel.updateBalance(obj.account_id, obj.amount);
        this.update(obj);
    }
}