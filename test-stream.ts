import OpenAI from 'openai'
import 'dotenv/config'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1' })

async function main() {
  const stream = await openai.chat.completions.create({
    model: 'deepseek-v3',
    messages: [{ role: 'user', content: 'Introduce yourself' }],
    max_tokens: 100,
    stream: true, // stream
  })
  // 打印 stream
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
}
main()
