import "dotenv/config";
import {Client as MinioClient, BucketItemFromList } from "minio";
import { BucketsList, ObjectStream } from "../types";

if (!process.env.MINIO_ACCESS_KEY) {
    throw new Error('env MINIO_ACCESS_KEY is empty.');
}

if (!process.env.MINIO_SECRET_KEY) {
    throw new Error('env MINIO_SECRET_KEY is empty.');
}

const minioClient: MinioClient = new MinioClient({
    endPoint: 'minio',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});

export const makeObjectStoreClient = () => {
    return {
        listBuckets: async () : Promise<BucketsList[]> => {
            return await minioClient.listBuckets();
        },
        listObjects: (bucketName: string) : ObjectStream<any> => {
            return minioClient.listObjects(bucketName);
        }
    }
};
