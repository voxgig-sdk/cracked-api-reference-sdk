import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Scrape, ScrapeCreateData } from '../CrackedApiReferenceTypes';
declare class ScrapeEntity extends CrackedApiReferenceEntityBase<Scrape> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScrapeEntity): ScrapeEntity;
    create(this: any, reqdata?: ScrapeCreateData, ctrl?: Control): Promise<ScrapeEntity>;
}
export { ScrapeEntity };
