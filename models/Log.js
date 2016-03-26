'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Log Schema
 */
var LogSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Log name',
		trim: true
	},
  physicContent: {
      type: String,
      default: '',
      trim: true,
  },
  emotionContent: {
      type: String,
      default: '',
      trim: true,
  },
  academicContent: {
      type: String,
      default: '',
      trim: true,
  },
  communeContent: {
      type: String,
      default: '',
      trim: true,
  },
  etherContent: {
      type: String,
      default: '',
      trim: true,
  },
	physicArray: {
      type: Array,
			default : []
  },
	emotionArray: {
      type: Array,
      default: []
  },
  academicArray: {
      type: Array,
      default: []
  },
  communeArray: {
      type: Array,
      default: []
  },
  etherArray: {
      type: Array,
      default: []
  },
  physicContentLength: {
      type: Number,
      default: 0
  },
  emotionContentLength: {
      type: Number,
      default: 0
  },
  academicContentLength: {
      type: Number,
      default: 0
  },
  communeContentLength: {
      type: Number,
      default: 0
  },
  etherContentLength: {
      type: Number,
      default: 0
  },
	physicArrayLength: {
      type: Number,
      default: 0
  },
  emotionArrayLength: {
      type: Number,
      default: 0
  },
  academicArrayLength: {
      type: Number,
      default: 0
  },
  communeArrayLength: {
      type: Number,
      default: 0
  },
  etherArrayLength: {
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
	firstExperience: {
		type: Schema.ObjectId,
		ref: 'Experience'
	}
});

mongoose.model('Log', LogSchema);
