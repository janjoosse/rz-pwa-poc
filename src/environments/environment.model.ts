export interface Environment {
    channelName: string;
    fontSubsets: { [channelName: string]: string };
    contentful: {
        baseURL: string;
        spaceId: string;
        environmentId: string;
        deliveryAccessToken: string;
        previewAccessToken: string;
    }
}