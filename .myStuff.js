const GetRemoteDataHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
      || (handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetRemoteDataIntent');
  },
  async handle(handlerInput) {
    let outputSpeech = 'This is the default message.';

    await getRemoteData('https://api.spoonacular.com/recipes/complexSearch?query=tomato&number=2')
      .then((response) => {
        const data = JSON.parse(response);
        
        outputSpeech = `There are currently ${data.people.length} astronauts in space. `;
        for (let i = 0; i < data.people.length; i += 1) {
          if (i === 0) {
            // first record
            outputSpeech = `${outputSpeech}Their names are: ${data.people[i].name}, `;
          } else if (i === data.people.length - 1) {
            // last record
            outputSpeech = `${outputSpeech}and ${data.people[i].name}.`;
          } else {
            // middle record(s)
            outputSpeech = `${outputSpeech + data.people[i].name}, `;
          }
        }
      })
      .catch((err) => {
        console.log(`ERROR: ${err.message}`);
        // set an optional error message here
        // outputSpeech = err.message;
      });

    return handlerInput.responseBuilder
      .speak(outputSpeech)
      .getResponse();
  },
};
// const helpMeCookIntentHandler 