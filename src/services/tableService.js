'use strict';

import { dbService } from './dbService.js';

// const card = {id: num: 5 , suit: s}

const KEY = 'tables';

export default {
    query,
    get,
    remove,
    save,
    getEmptyTable
}

async function query() {
    var tables = await dbService.query(KEY);
    if (!tables || !tables.length) {
        tables = _createDefaultTables();
        await dbService.insert(KEY, tables);
    }
    return tables;
}

function get(id) {
    return dbService.get(KEY, id);
}

function remove(id) {
    return dbService.delete(KEY, id);
}

function save(table) {
    if (table._id) return dbService.put(KEY, table);
    else return dbService.post(KEY, table)
}

function getEmptyTable() {
    return {
        vendor: '',
        speed: 0,
        isManual: false
    }
}

function _createDefaultTables() {
    return [
        _createTable('Audu', 50),
        _createTable('Fiak', 73),
        _createTable('Subali', 100),
        _createTable('Susika', 120),
    ];
}

function _createTable(vendor, speed) {
    return {
        vendor,
        speed,
    }
}