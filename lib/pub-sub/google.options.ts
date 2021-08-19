import {SubscriberOptions} from "@google-cloud/pubsub";

interface CredentialBody {
    client_email?: string;
    private_key?: string;
}
export interface GoogleAuthOptions {
    /** Path to a .json, .pem, or .p12 key file */
    keyFilename?: string;
    /** Path to a .json, .pem, or .p12 key file */
    keyFile?: string;
    credentials?: CredentialBody;
    /** Required scopes for the desired API request */
    scopes?: string | string[];
    projectId?: string;
    uri?: string;
}

export interface GCloudPubSubServerOptions {
    authOptions: GoogleAuthOptions;
    projectId: string;
    subscriberOptions?: SubscriberOptions;
}