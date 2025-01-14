import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'

const sessionOptions = {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_cookiename',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

async function saveSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, color } = req.body
  req.session.username = username
  req.session.color = color
  await req.session.save()
  res.send({ ok: true })
}

export default withIronSessionApiRoute(saveSessionRoute, sessionOptions)

