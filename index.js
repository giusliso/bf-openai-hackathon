const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '##YOUR-API-KEY##',
});
const openai = new OpenAIApi(configuration);

callOpenAi().then(
    completion =>  console.log(completion.data.choices[0].message)
);

async function  callOpenAi(){
    return  await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: "Transalate in italian Hello world!"
            }
        ]
    });
}




