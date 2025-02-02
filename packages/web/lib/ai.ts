// > npm install @azure-rest/ai-inference @azure/core-auth @azure/core-sse

import ModelClient from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';

// To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings.
// Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export async function askAI(prompt: string) {
  // @ts-ignore
  const client = new ModelClient(
    'https://models.inference.ai.azure.com',
    new AzureKeyCredential(token!)
  );

  const response = await client.path('/chat/completions').post({
    body: {
      messages: [
        {
          role: 'system',
          content:
            'You are a React developer that builds UI components. You only respond with code. You will be given reference code and some instructions on how to modify it.',
        },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-4o',
      max_tokens: 2048,
    },
  });

  if (response.status !== '200') {
    throw response.body.error;
  }
  return response.body.choices[0].message.content;
}
