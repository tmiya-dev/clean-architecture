import { BucketItemFromList, BucketStream } from "minio";

export type BucketsList = BucketItemFromList;
export type ObjectStream<T> = BucketStream<T>;
