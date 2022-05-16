import AccountModel from './AccountModel';
import CategoryModel from './CategoryModel';
import OperationModel from './OperationModel';
import {defaultAccounts, defaultCategories} from './defaultRecords';


const createTables = () => {
    AccountModel.createTable();
    CategoryModel.createTable();
    OperationModel.createTable();
};

const dropTables = () => {
    AccountModel.dropTable();
    CategoryModel.dropTable();
    OperationModel.dropTable();
};

async function insertDefault(defaults, model) {
    const data = await model.select();
    if (data.length === 0) {
        defaults.map((item, index) => {
            model.create({
                ...item,
                order_number: index + 1,
            });
        });
    }
}

async function initDb() {
    createTables();
    await insertDefault(defaultAccounts, AccountModel);
    await insertDefault(defaultCategories, CategoryModel);
}

export {initDb, AccountModel, CategoryModel, OperationModel};