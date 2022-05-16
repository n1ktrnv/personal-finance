import { BaseModel, types } from 'expo-sqlite-orm';
import db from './db';


export default class CategoryModel extends BaseModel {
    static get database() {
        return db;
    }

    static get tableName() {
        return 'categories';
    }

    static get columnMapping() {
        return {
            id: {type: types.INTEGER, primary_key: true},
            name: { type: types.TEXT, not_null: true },
            order_number: {type: types.INTEGER, not_null: true},
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
        this.create({...props, order_number: 1});
    }

    static incrementOrders() {
        const sql = `
            UPDATE categories
            SET order_number = order_number + 1;
        `;
        this.repository.databaseLayer.executeSql(sql);
    }
}