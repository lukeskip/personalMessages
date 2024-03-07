require("dotenv").config();
const { OpenAI } = require("openai");
const axios = require("axios");
const prompt = require("../utils/prompt");
const max_tokens = 1200;

const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const requestMessages = async (req, res) => {
  const { receiver, company, style, lang, skills_soft, skills_tech, values } =
    req.body;
  if (
    [receiver, company, style, lang, skills_soft, skills_tech, values].every(
      (item) => !!item
    )
  ) {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: prompt(req.body),
          },
        ],
        max_tokens: max_tokens,
      });

      const cleaned = completion.choices[0].message.content.replace(/\n/g, "");
      jsonResponse = JSON.parse(cleaned);
      res.json({ messages: jsonResponse.messages });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "chat-gpt error" });
    }
  } else {
    return res.status(500).json({ message: "faltan datos" });
  }
};

module.exports = requestMessages;
