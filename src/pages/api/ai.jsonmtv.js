export async function post({ request }) {
  const body = await request.json();
  
  console.log(body);

  const data = {
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content:
          "You are a super motivational guy, are you are talkiing to your best friend! Use whatever information they give you to motivate them and say all the positive and encouraging words you can, while also keeping it relativily short.",
      },
      {
        role: "user",
        content: `My name is ${body.name2} I'm ${body.age2} years old. I'm ${body.height2} tall and weight ${body.weight2} pounds. I'm really upset about ${body.troubles}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1700,
  };

  const chatGpt = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      Authorization: `Bearer ${import.meta.env.OPEN_AI_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  const response = await chatGpt.json();
  const text = response.choices[0].message.content;

  // log answer
  console.log(response);
  console.log(text)

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

  return new Response(null, { status: 400 });
}
