'use strict';

// include Alexa libraries
const Alexa = require('alexa-sdk');

// ID of Alexa Skill
const APP_ID = "amzn1.ask.skill.7ac02c67-3f89-4ef6-9d3d-352b13bf75b4";

// replacement of "this" context which always references proper object
var instance;
// the active user initiating the session
var user;
// the event initiating the lambda function
var e;

// create event handlers
const handlers = {
    'LaunchRequest': function () {        
        this.emit('GetCalorieIntent');
    },
    // retrieve calorie logs from database
    'GetCalorieIntent': function () {
        // set context appropriately
        instance = this;
        // TODO attempt to retrieve data from dB
        // TODO provide calorie information for the day and prompt for more info if data is found
        // TODO prompt for some calorie info if none is found
    },
    // add a new calorie log entry to the database
    'StoreCalorieIntent': function () {
        // set context appropriately
        instance = this;
        // set user appropriately
        user = e.session.user.userId;
        
        // TODO connect to database retrieve calorie log
        if(instance.attributes[user]) {
            
        }
        
        // TODO add new calorie info
        // TODO return updated calorie info to database
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Goodbye!");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Goodbye!");
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', "Goodbye!");
    },
};

exports.handler = function (event, context, callback) {
    e = event;
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.dynamoDBTableName = 'calorieCountData';
    alexa.registerHandlers(handlers);
    alexa.execute();
};