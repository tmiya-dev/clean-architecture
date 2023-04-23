import { Request, Response } from "express";
import { makeObjectStoreClient } from "../repositories/makeObjectStoreClient.minio";
import { BucketsList, ObjectStream } from "../types";

interface ListObjectsRequest extends Request {
    params: {
        bucketName: string
    }
}

export const listObjects = (req: ListObjectsRequest, res: Response<{}>) => {
    const objectStoreClient = makeObjectStoreClient();
    const stream: ObjectStream<any> = objectStoreClient.listObjects(req.params.bucketName);
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const data = [];
        stream.on('data', (obj) => {
            data.push(obj);
        });
        stream.on('end', () => {
            // @ts-ignore
            res.status(200).json({ data });
            // @ts-ignore
            resolve(data);
        });
        stream.on('error', (err) => {
            reject(err);
        })

    })
}
