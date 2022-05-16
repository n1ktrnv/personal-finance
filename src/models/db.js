import * as SQLite from 'expo-sqlite';

const dbName = 'database.db'
const db = async () => SQLite.openDatabase(dbName);

export default db;
export {dbName};