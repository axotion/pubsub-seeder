#!/usr/bin/env node

import {Seeder} from "../lib/pub-sub/seeder.js";
import * as fs from "fs"


const bootstrap = async function () {
    const args = process.argv
    let fileWithTopicsAndSubscriptions = args[2]

    if(!fileWithTopicsAndSubscriptions) {
        throw new Error(`Missing argument, expected filename (eg. test.json)`)
    }

    const fullPathFileWithTopicsAndSubscriptions = `${process.cwd()}/${fileWithTopicsAndSubscriptions}`
    const fileData = fs.readFileSync(fullPathFileWithTopicsAndSubscriptions)
    const fileDataJson = JSON.parse(fileData.toString())

    const authOptions = {
        credentials: {
            client_email: process.env.PUBSUB_CLIENT_EMAIL,
            private_key: process.env.PUBSUB_PRIVATE_KEY?.replace(/\\n/g, "\n")
        }
    }

    const seeder = new Seeder({
        projectId: process.env.PUBSUB_PROJECT_ID,
        authOptions: authOptions
    }, fileDataJson)

    await seeder.seed()
}

bootstrap()