async function post({ request }) {
  const body = await request.json();
  
  console.log(body);

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a bully that roasts people hardcore. Be mean and make funny jokes about that person when they tell you about themselves. Do not hold back, be as mean as possible.",
      },
      {
        role: "user",
        content: `My name is ${body.name} I'm ${body.age} years old. I'm ${body.height} tall and weight ${body.weight} pounds. ${body.interests}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1700,
  };

  const chatGpt = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      Authorization: `Bearer ${"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"}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  const response = await chatGpt.json();
  const text = response.choices[0].message.content;

  // log answer
  console.log(response);
  console.log(text);

  return new Response(
    JSON.stringify({
      message: text,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export { post };
