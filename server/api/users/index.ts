import type { IncomingMessage, ServerResponse } from 'http'


export default async (req: IncomingMessage, res: ServerResponse) => {
    try {
        if (req.method !== 'GET') {
            res.statusCode = 405
            res.end()
        }
         // just for demo purposes   
        return []
    } catch (e) {
        console.log('Error listing users: ' + e)
        res.statusCode = 500
        res.end()
    }
}
