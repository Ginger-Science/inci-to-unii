var Minio = require('minio')

export const s3 = new Minio.Client({
    endPoint: process.env.S3_ENDPOINT as string,
    port: 9768,
    useSSL: false,
    accessKey: process.env.S3_KEY as string,
    secretKey: process.env.S3_SECRET as string,
})