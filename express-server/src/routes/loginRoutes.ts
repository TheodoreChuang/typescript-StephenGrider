import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req?.session?.loggedIn) {
    next()
    return
  }

  res.status(403)
  res.send('Not permitted')
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  if (req?.session?.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/auth/login">Login</a>
    </div>
  `)
  }
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (email === 'test@mail.com' && password === 'stackingsats') {
    req.session = { loggedIn: true }

    res.redirect('/')
  } else {
    res.send('Invalid email or password')
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route 🌮')
})

export { router }