import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { RetryWebsiteScrape, RetryWebsiteScrapeCreateData } from '../CrackedApiReferenceTypes';
declare class RetryWebsiteScrapeEntity extends CrackedApiReferenceEntityBase<RetryWebsiteScrape> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: RetryWebsiteScrapeEntity): RetryWebsiteScrapeEntity;
    create(this: any, reqdata?: RetryWebsiteScrapeCreateData, ctrl?: Control): Promise<RetryWebsiteScrapeEntity>;
}
export { RetryWebsiteScrapeEntity };
