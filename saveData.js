'use strict';

const events = require('./events.js');
events.on('save', handleSave);

function handleSave(payload) {
    console.log(`You saved ${payload.id}`);

    events.emit('cache-update', { id: payload.id });
};

/**
 * handles the data to be saved
 * console logs that you saved this specific data
 * @param payload
 */

function handleDelete(payload) {
    console.log(`You deleted ${payload.id}`);

    events.emit('cache-update', { id: payload.id });
};

/**
 * handles the data that will be deleted
 * console logs the data that was deleted.
 * @param payload
 */

module.exports = {
    handleSave,
    handleDelete,
};