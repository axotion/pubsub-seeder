import {PubSub} from "@google-cloud/pubsub";
import {GCloudPubSubServerOptions} from "./google.options";
import * as clc from 'cli-color'

export class Seeder {

    private client: PubSub = null

    constructor(
        private readonly options: GCloudPubSubServerOptions,
        private readonly topicSubscriptionsRecords: { topic: string, subscriptions: string[] }[]
    ) {
    }

    async seed() {

        this.client = new PubSub({
            ...this.options.authOptions,
        })

        for (const topicSubscription of this.topicSubscriptionsRecords) {

            try {
                console.log(clc.green(`About to create topic ${topicSubscription.topic}`))
                await this.client.createTopic(topicSubscription.topic)
            } catch (error) {
                console.log(clc.red(`There was an error when ${topicSubscription.topic} was creating`))
                console.log(clc.red(error.message))
            }

            for (const subscription of topicSubscription.subscriptions) {
                try {
                    console.log(clc.green(`About to create subscription ${subscription}`))
                    await this.client.createSubscription(topicSubscription.topic, subscription)
                } catch (error) {
                    console.log(clc.red(`There was an error when ${subscription} was creating`))
                    console.log(clc.red(error.message))
                }
            }
        }

    }
}
