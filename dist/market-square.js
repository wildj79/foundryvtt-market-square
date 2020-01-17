/// <reference path="../node_modules/foundry-pc-types/index.d.ts" />
/**
 * Initializes the module.
 * 
 * Author: wildj79
 * Software License: MIT
 */

// Import JavaScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { MarketSheet } from './module/actor/sheet.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('Market Square | Initializing markets');

	// Assign custom classes and constants here
	// Actors.registerSheet("market-square", MarketSheet, {types: ["market"], makeDefault: false});
	
	// Register custom module settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();
	
	// Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the module is ready
});

// Add any additional hooks if necessary
