import { Hono } from 'hono'
import { accessAuth } from './middleware/auth'

const app = new Hono()

app.use('/api/*', accessAuth)
app.get('/api/health', (c) => c.text('Healthy! 🔥'))

export default app