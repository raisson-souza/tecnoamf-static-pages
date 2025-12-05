function Get(
    envK: string,
    envV: string | undefined | null,
): string | null {
    if (envV === null || envV === undefined || envV.trim() === '' || envV === 'undefined' || envV === 'null') {
        console.error(`${ envK } não encontrado no ENV.`)
        throw new Error(`${ envK } não encontrado no ENV.`)
    }
    return envV
}

const createFactory = (envK: string, envV: string | undefined | null) =>
    ({ get: () => Get(envK, envV) })

const EnvManager = {
    ApiUrl: createFactory("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL),
    Environment: createFactory("NEXT_PUBLIC_ENV", process.env.NEXT_PUBLIC_ENV),
    FirebaseApiKey: createFactory("NEXT_PUBLIC_FIREBASE_API_KEY", process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
    FirebaseAuthDomain: createFactory("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
    FirebaseDatabaseURL: createFactory("NEXT_PUBLIC_FIREBASE_DATABASE_URL", process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL),
    FirebaseProjectId: createFactory("NEXT_PUBLIC_FIREBASE_PROJECT_ID", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
    FirebaseStorageBucket: createFactory("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET", process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
    FirebaseMessagingSenderId: createFactory("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
    FirebaseAppId: createFactory("NEXT_PUBLIC_FIREBASE_APP_ID", process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
}

export default EnvManager
