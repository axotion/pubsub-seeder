import {PubSub} from "@google-cloud/pubsub";

export class Seeder {

    client = null

    topicSubscriptionsRecords = null

    options = null

    constructor(
        options,
        topicSubscriptionsRecords
    ) {
        this.topicSubscriptionsRecords = topicSubscriptionsRecords
        this.options = options
    }

    async seed() {

        this.client = new PubSub({
            ...this.options.authOptions,
        })

        for (const topicSubscription of this.topicSubscriptionsRecords) {

            try {
                console.log((`About to create topic ${topicSubscription.topic}`))
                await this.client.createTopic(topicSubscription.topic)
            } catch (error) {
                console.log((`There was an error when ${topicSubscription.topic} was creating`))
                console.log((error.message))
            }

            for (const subscription of topicSubscription.subscriptions) {
                try {
                    console.log((`About to create subscription ${subscription}`))
                    await this.client.createSubscription(topicSubscription.topic, subscription)
                } catch (error) {
                    console.log((`There was an error when ${subscription} was creating`))
                    console.log((error.message))
                }
            }
        }

    }
}
