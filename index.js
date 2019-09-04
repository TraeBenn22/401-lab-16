'use strict';

const events = require('./events.js');
require('./saveData');
require('./logger.js');

events.emit('save', { id: 101 });
events.emit('delete', { id: 101 });

events.on('read', handleRead);
events.on('stringify', handleUppercase);
events.on('save', handleSave);

