//cancer symptoms: https://www.google.co.in/search?q=healthcare+alexa+skills&oq=healthcare+alexa+skill&aqs=chrome.0.0j69i57.3084j0j4&sourceid=chrome&ie=UTF-8#q=cancer+symptoms

var MedicalSymptomsData = {
    "breast": {
        "about": "is a cancer that forms in the cells of the breasts.",
        "symptoms": "its symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.",
        "treatment": "its treatment depends on the stage of cancer. It may consist of chemotherapy,radiation, hormone therapy and surgery."
    },
    "prostate": {
        "about": "is a cancer in a man's prostate, a small walnut-shaped gland that produces seminal fluid.",
        "symptoms": "A man's prostate produces the seminal fluid that nourishes and transports sperm. Symptoms include difficulty with urination, but sometimes there are no symptoms at all. ",
        "treatment": "Some types of prostate cancer grow slowly. In those cases, monitoring is recommended. Other types are aggressive and require radiation, surgery, hormone therapy, chemotherapy or other treatments."
    },
    "basal": {
        "about": "is a type of skin cancer that begins in the basal cells. Basal cells produce new skin cells as old ones die. Limiting sun exposure can help prevent these cells from becoming cancerous.",
        "symptoms": "This cancer typically appears as a white, waxy lump or a brown, scaly patch on sun-exposed areas, such as the face and neck.",
        "treatment": "its treatments include prescription creams or surgery to remove the cancer. In some cases radiation therapy may be required."
    },
    "melanoma": {
        "about": "is the most serious type of skin cancer. Melanoma occurs when the pigment-producing cells that give colour to the skin become cancerous.",
        "symptoms": "its symptoms might include a new, unusual growth or a change in an existing mole. Melanomas can occur anywhere on the body.",
        "treatment": "its treatment may involve surgery, radiation, medication or in some cases, chemotherapy."
    },
    "colon": {
        "about": "is a cancer of the colon or rectum, located at the digestive tract's lower end.",
        "symptoms": "its symptoms depend on the size and location of the cancer. Some commonly experienced symptoms include changes in bowel habits, changes in stool consistency, blood in the stool and abdominal discomfort.",
        "treatment": "its treatment depends on the size, location and how far the cancer has spread. Common treatments include surgery to remove the cancer, chemotherapy and radiation therapy."
    },
    "lung": {
        "about": "is a cancer that begins in the lungs and most often occurs in people who smoke. Two major types of lung cancer are non-small cell lung cancer and small cell lung cancer. Causes of lung cancer include smoking, second-hand smoke, exposure to certain toxins and family history.",
        "symptoms": "Symptoms include a cough (often with blood), chest pain, wheezing and weight loss. These symptoms often don't appear until the cancer is advanced.",
        "treatment": "Treatments vary but may include surgery, chemotherapy, radiation therapy, targeted drug therapy and immunotherapy."
    },
    "leukemia": {
        "about": "is a cancer of blood-forming tissues, hindering the body's ability to fight infection. Leukaemia is cancer of blood-forming tissues, including bone marrow. Many types exist such as acute lymphoblastic leukaemia, acute myeloid leukaemia and chronic lymphocytic leukaemia.",
        "symptoms": "Many patients with slow-growing types of leukaemia don't have symptoms. Rapidly growing types of leukaemia may cause symptoms that include fatigue, weight loss, frequent infections and easy bleeding or bruising.",
        "treatment": "its treatment is highly variable. For slow-growing leukaemias, treatment may include monitoring. For aggressive leukaemias, treatment includes chemotherapy that's sometimes followed by radiation and stem-cell transplant."
    },
    "lymphoma": {
        "about": "is a cancer of the lymphatic system. The lymphatic system is the body's disease-fighting network. It includes the lymph nodes, spleen, thymus gland and bone marrow. ",
        "symptoms": "its symptoms include enlarged lymph nodes, fatigue and weight loss.",
        "treatment": "its treatment may involve chemotherapy, medication, radiation therapy and rarely stem-cell transplant."
    },
    "breast cancer": {
        "about": "is a cancer that forms in the cells of the breasts.",
        "symptoms": "its symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.",
        "treatment": "its treatment depends on the stage of cancer. It may consist of chemotherapy,radiation, hormone therapy and surgery."
    },
    "prostate cancer": {
        "about": "is a cancer in a man's prostate, a small walnut-shaped gland that produces seminal fluid.",
        "symptoms": "A man's prostate produces the seminal fluid that nourishes and transports sperm. Symptoms include difficulty with urination, but sometimes there are no symptoms at all. ",
        "treatment": "Some types of prostate cancer grow slowly. In those cases, monitoring is recommended. Other types are aggressive and require radiation, surgery, hormone therapy, chemotherapy or other treatments."
    },
    "basal cancer": {
        "about": "is a type of skin cancer that begins in the basal cells. Basal cells produce new skin cells as old ones die. Limiting sun exposure can help prevent these cells from becoming cancerous.",
        "symptoms": "it typically appears as a white, waxy lump or a brown, scaly patch on sun-exposed areas, such as the face and neck.",
        "treatment": "its treatments include prescription creams or surgery to remove the cancer. In some cases radiation therapy may be required."
    },
    "melanoma cancer": {
        "about": "is the most serious type of skin cancer. Melanoma occurs when the pigment-producing cells that give colour to the skin become cancerous.",
        "symptoms": "its symptoms might include a new, unusual growth or a change in an existing mole. Melanomas can occur anywhere on the body.",
        "treatment": "its treatment may involve surgery, radiation, medication or in some cases, chemotherapy."
    },
    "colon cancer": {
        "about": "is a cancer of the colon or rectum, located at the digestive tract's lower end.",
        "symptoms": "its symptoms depend on the size and location of the cancer. Some commonly experienced symptoms include changes in bowel habits, changes in stool consistency, blood in the stool and abdominal discomfort.",
        "treatment": "its treatment depends on the size, location and how far the cancer has spread. Common treatments include surgery to remove the cancer, chemotherapy and radiation therapy."
    },
    "lung cancer": {
        "about": "is a cancer that begins in the lungs and most often occurs in people who smoke. Two major types of lung cancer are non-small cell lung cancer and small cell lung cancer. Causes of lung cancer include smoking, second-hand smoke, exposure to certain toxins and family history.",
        "symptoms": "its symptoms include a cough (often with blood), chest pain, wheezing and weight loss. These symptoms often don't appear until the cancer is advanced.",
        "treatment": "its treatments vary but may include surgery, chemotherapy, radiation therapy, targeted drug therapy and immunotherapy."
    },
    "leukemia cancer": {
        "about": "is a cancer of blood-forming tissues, hindering the body's ability to fight infection. Leukaemia is cancer of blood-forming tissues, including bone marrow. Many types exist such as acute lymphoblastic leukaemia, acute myeloid leukaemia and chronic lymphocytic leukaemia.",
        "symptoms": "Many patients with slow-growing types of leukaemia don't have symptoms. Rapidly growing types of leukaemia may cause symptoms that include fatigue, weight loss, frequent infections and easy bleeding or bruising.",
        "treatment": "Treatment is highly variable. For slow-growing leukaemias, treatment may include monitoring. For aggressive leukaemias, treatment includes chemotherapy that's sometimes followed by radiation and stem-cell transplant."
    },
    "lymphoma cancer": {
        "about": "is a cancer of the lymphatic system. The lymphatic system is the body's disease-fighting network. It includes the lymph nodes, spleen, thymus gland and bone marrow. ",
        "symptoms": "its symptoms include enlarged lymph nodes, fatigue and weight loss.",
        "treatment": "its treatment may involve chemotherapy, medication, radiation therapy and rarely stem-cell transplant."
    }
};

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        if (event.session.application.applicationId !== "amzn1.ask.skill.6aa47a56-c28f-4992-8917-637eb68ce8dc") {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({
                requestId: event.request.requestId
            }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {

    var intent = intentRequest.intent
    var intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == "MedicalSymptomsDataIntent") {
        handleMedicalSymptomsResponse(intent, session, callback);
    } else if (intentName == "MedicalSymptomsBlankSlotIntent") {
        handleBlankSlotRequest(intent, session, callback);
    } else if (intentName == "AMAZON.YesIntent") {
        handleYesResponse(intent, session, callback);
    } else if (intentName == "AMAZON.NoIntent") {
        handleNoResponse(intent, session, callback);
    } else if (intentName == "AMAZON.HelpIntent") {
        handleGetHelpRequest(intent, session, callback);
    } else if (intentName == "AMAZON.StopIntent") {
        handleFinishSessionRequest(intent, session, callback);
    } else if (intentName == "AMAZON.CancelIntent") {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        //  handleInvalidRequest(intent, session, callback);
        throw "Invalid Intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {

    var speechOutput = "Welcome to Medical Symptoms ! I can tell you about all types of Cancer : " +
        "Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma." +
        " I can only give details about one at a time. Which type of Cancer do you want to know about ?"

    var reprompt = "Which kind of Cancer do you want to know about ? You can find out about Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma."

    var header = "Medical Symptoms!";

    var shouldEndSession = false;

    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": reprompt
    }

    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent && intent.slots && intent.slots.Disease && intent.slots.Disease.value;
    return answerSlotFilled
}

function handleMedicalSymptomsResponse(intent, session, callback) {

    // if (isAnswerSlotValid(intent)) {
    var disease = intent.slots.Disease.value.toLowerCase();
    // if (disease.equals("")) {
    //     var speechOutput = "Try asking about a type of Cancer such as Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma.";
    //     var repromptText = "Try asking about a kind of Cancer";
    //     var header = "Not a common type of Cancer";
    // }
    if (!MedicalSymptomsData[disease]) {
        var speechOutput = "Try asking about another type of Cancer such as Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma.";
        var repromptText = "Try asking about another kind of Cancer";
        var header = "Not a common type of Cancer";
    } else {
        var about = MedicalSymptomsData[disease].about;
        var symptoms = MedicalSymptomsData[disease].symptoms;
        var treatment = MedicalSymptomsData[disease].treatment;

        var speechOutput = capitalizeFirst(disease) + " " + about + " and " + symptoms + " and " + treatment + ". Do you want to hear about more Cancers types ?";
        var repromptText = "Do you want to hear about more various kinds of Cancers?";
        var header = capitalizeFirst(disease);
    }

    // } else {
    //     var speechOutput = "Try asking about a type of Cancer such as Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma.";
    //     var repromptText = "Try asking about a kind of Cancer";
    //     var header = "Not a common type of Cancer";
    // }

    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
}

function handleYesResponse(intent, session, callback) {
    var speechOutput = "Great ! Which type of Cancer ? You can find out about Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma."
    var repromptText = speechOutput;
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleNoResponse(intent, session, callback) {
    handleFinishSessionRequest(intent, session, callback);
}


function handleBlankSlotRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    var speechOutput = "I did not understand that. I can tell you details about various types of Cancer : " + "Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma." +
        "Which cancer do you want to know about ? Remember, I can only give information about one kind of cancer at a time.";

    var repromptText = speechOutput;
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    var speechOutput = "I can tell you details about various types of Cancer : " + "Prostate, Basal, Melanoma, Colon, Breast, Lung, Leukemia, Lymphoma." +
        "Which cancer do you want to know about ? Remember, I can only give information about one kind of cancer at a time.";

    var repromptText = speechOutput;
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye! Thank you for using Medical Symptoms  !", "", true));
}


// ------- Helper functions to build responses for Alexa -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

function capitalizeFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
