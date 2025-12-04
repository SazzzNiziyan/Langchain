import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate  } from "@langchain/core/prompts";

config();

 const model = new ChatGoogleGenerativeAI({
   temperature: 0.7,
   model: "gemini-2.0-flash",
   apiKey: process.env.GEMINI_API_KEY,
 });

const promptTemplate = PromptTemplate.fromTemplate(`
    
    Tell me a joke about {topic}.
    
    `);

    promptTemplate.pipe(model).invoke({ topic: "cats" }).then(response => {
      console.log("Joke about cats:", response);
    });

    // promptTemplate.invoke({ topic: "computers" }).then(response => {
    //   console.log("Joke about computers:", response.value);
    // });



//  model.invoke("who are you?").then(response => {
//    console.log("Response from Google Gemini:", response.content);
//  }).catch(error => {
//    console.error("Error invoking Google Gemini model:", error);
//  });