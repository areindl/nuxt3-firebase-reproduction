import type { IncomingMessage, ServerResponse } from 'http'
import { useCookie } from 'h3'
import { getAuth } from 'firebase-admin/auth'
import app from '~~/config/firebase-admin.config'

export default async (req: IncomingMessage, res: ServerResponse, next) => {
    if (req.url.includes('/api/')) {
        const token = useCookie(req, 'token')
        try {
            if (!token) {
                res.statusCode = 403
                res.end('Empty Token!')
                return // Return is crucial here, otherwise the next middleware will continue to run
            }

            await getAuth(app).verifyIdToken(token)
            next()
        } catch (e) {
            console.log('error', e)
            console.log('Server Auth Error: ' + e) // Shows insufficient permissions
            res.statusCode = 400
            res.end('You must be signed in to view the protected content on this page.')
        }
    }
}
