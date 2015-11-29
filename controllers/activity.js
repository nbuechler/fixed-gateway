'use strict';

/**
 * Module dependencies.
 */
require('../models/Activity');
require('../models/Experience');

var mongoose = require('mongoose'),
	Activity = mongoose.model('Activity'),
	Experience = mongoose.model('Experience'),
	errorHandler = require('./errors'),
	_ = require('lodash');

/**
 * Create a Activity
 */
exports.create = function(req, res) {
	var activity = new Activity(req.body);
	activity.user = req.body.user;

	activity.descriptionArray = activity.description.split(' ');
	activity.descriptionArrayLength = activity.descriptionArray.length;

	activity.save(function(err) { //This is not working right for private activities
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(activity);
		}
	});
};

/**
 * Show the current Activity
 */
exports.read = function(req, res) {
	res.jsonp(req.activity);
};

/**
 * Update a Activity
 */
exports.update = function(req, res) {
	var activity = req.activity ;

	activity = _.extend(activity , req.body);

	activity.descriptionArray = activity.description.split(' ');
	activity.descriptionArrayLength = activity.descriptionArray.length;

	activity.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(activity);
		}
	});
};

/**
 * Delete an Activity
 */
exports.delete = function(req, res) {
	var activity = req.activity ;

	activity.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(activity);
		}
	});
};

/**
 * List of Activities
 */
exports.list = function(req, res) {
	Activity.find().sort('-created').populate('user', 'displayName').exec(function(err, activities) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(activities);
		}
	});
};

/**
 * List of Activities
 */
exports.listPublic = function(req, res) {
	Activity.find({'privacy': 1}).sort('-created').populate('user', 'displayName').exec(function(err, activities) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(activities);
		}
	});
};

/**
 * List of Activities by user
 */
exports.listByLogedInUser = function(req, res) {
	//where activity.user === req.user
	Activity.find({'user': req.user}).sort('-created').populate('user', 'displayName').exec(function(err, activities) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(activities);
		}
	});
};


/**
 * Activity middleware
 */
exports.activityByID = function(req, res, next, id) {
	Activity.findById(id).populate('user', 'displayName').exec(function(err, activity) {
		if (err) return next(err);
		if (! activity) return next(new Error('Failed to load Activity ' + id));

		/**
		 * List of Experience by activity
		 */
		Experience.find({'firstActivity': id}).sort('-created').populate('user', 'displayName').exec(function(err, experiences) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {

				/**
				 * Get only the public experiences.
				 */
				var experiencesList= [];
				for (var i = 0; i < experiences.length; i++) {
					if(experiences[i].privacy > 0){
						experiencesList.push(experiences[i]);
					} else if (experiences[i].user._id.toString() === req.user._id.toString()) {
						experiencesList.push(experiences[i]);
					}
					// else {
					// 	//That experience was private - :D
					// }
				}

				activity.experiencesList = experiencesList;
				req.activity = activity ;
				next();

			}
		});
	});
};

/**
 * Activity authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.activity.user.id !== req.user.id) {
		// TODO: Add logic that creates an alert log if someone is this is true
		if(req.activity.privacy < 1){
			return res.status(403).send('User is not authorized');
		}
	}
	next();
};
