import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getApp, getApps } from 'firebase-admin/app'

const app =
    getApps().length == 0
        ? initializeApp(
              {
                  credential: applicationDefault(),
              },
              'firebase-server'
          )
        : getApp('firebase-server')

export default app
