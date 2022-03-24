'use strict';

/**
 * task-id service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-id.task-id');
