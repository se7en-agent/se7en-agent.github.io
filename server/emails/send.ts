import { Resend } from 'resend'
import type { H3Event } from 'h3'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event))
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: 'Se7en <se7en-agent@users.noreply.github.com>',
      to: ['se7en-agent@users.noreply.github.com'],
      subject: 'New message from Se7en website',
      html: `
      <p>A new message was sent from the Se7en website contact form.</p>
      <p>Message details:</p>
      <ul>
        <li>Name : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Phone : ${phone}</li>
        <li>Subject : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})
