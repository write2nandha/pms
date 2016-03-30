'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;

	var SchemaTypes = mongoose.Schema.Types;

/**
 * CommissionSchema Schema
 */
var CommissionSchema = new Schema({
	CarrierName: {
		type: String,
		default: '',
		trim: true
	},
	CommissionPercentage: {
		type: SchemaTypes.Double,
		default: 0
	}
});

mongoose.model('Commission', CommissionSchema);

var PolicyStatusSchema = new Schema({
	polCount:Number,
	status:String
});

mongoose.model('PolicyStatus',PolicyStatusSchema,'policystatus');
