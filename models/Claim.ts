export type ClaimKey = 'admin' | 'meta'

export type CustomClaims = {
    meta?: boolean | string | object | undefined
    admin?: boolean | string | object | undefined
}
