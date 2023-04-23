import { Request, Response } from "express";
import { makeObjectStoreClient } from "../repositories/makeObjectStoreClient.minio";
import { BucketsList } from "../types";

export const getBuckets = async (req: Request<{}>, res: Response<{}>) => {
    const objectStoreClient = makeObjectStoreClient();
    const buckets: BucketsList[] = await objectStoreClient.listBuckets();
    res.status(200).json({
        buckets
    });
}
