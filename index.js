'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.7ac02c67-3f89-4ef6-9d3d-352b13bf75b4";  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        
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

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
