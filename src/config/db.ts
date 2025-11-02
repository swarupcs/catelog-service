/* eslint-disable @typescript-eslint/no-unsafe-call */
import config from "config";
import mongoose from "mongoose";

export const initDb = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    await mongoose.connect(config.get("database.url"));
};
