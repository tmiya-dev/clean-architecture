console.log('hello');
import express from "express";
import { getBuckets, listObjects } from "./operations";

const main = async () => {
    const app = express();

    app.get("/buckets", getBuckets);
    app.get("/objects/:bucketName", listObjects);

    const port = 80;
    app.listen({
        port
    });
};

main().then(() => {
    console.log("finished");
}).catch((err) => {
    console.error(err);
});
