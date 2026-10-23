import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScrapeWebsitePublic, ScrapeWebsitePublicCreateData } from '../CrackedApiReferenceTypes';
declare class ScrapeWebsitePublicEntity extends CrackedApiReferenceEntityBase<ScrapeWebsitePublic> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScrapeWebsitePublicEntity): ScrapeWebsitePublicEntity;
    create(this: any, reqdata?: ScrapeWebsitePublicCreateData, ctrl?: Control): Promise<ScrapeWebsitePublicEntity>;
}
export { ScrapeWebsitePublicEntity };
