'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Experience Schema
 */
var ExperienceSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Experience name',
		trim: true
	},
	experienceTime: {
		type: String,
		default: '',
		required: 'Please pick a time',
		trim: true
	},
	pronoun: {
		type: String,
		default: '',
		required: 'Who was this? Pick a pronoun',
		trim: true
	},
	pastTenseVerb: {
		type: String,
		default: '',
		required: 'Who did what? Say something about the past!',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill in a description of the experience',
		trim: true
	},
	descriptionArray: {
		type: Array,
		default: []
	},
	descriptionArrayLength: {
		type: Number,
		default: 0
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	privacy: {
		type: Number,
		default: 0
	},
	archived: {
		type: Number,
		default: 0
	},
	seconds: { //Lenght of time the experience happened
		type: Number,
		default: 0
	},
	firstActivity: {
		type: Schema.ObjectId,
		ref: 'Activity',
		required: 'Please choose an activity'
	},
	secondActivity: {
		type: Schema.ObjectId,
		ref: 'Activity',
		required: 'Please choose an activity'
	},
	previousFirstActivity: {
		type: Schema.ObjectId,
		ref: 'Activity',
		required: 'Please choose an activity'
	},
	previousSecondActivity: {
		type: Schema.ObjectId,
		ref: 'Activity',
		required: 'Please choose an activity'
	},
	logsList: {
		type: Array,
		default: []
	}
});

mongoose.model('Experience', ExperienceSchema);
