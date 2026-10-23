import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScrapingStatus, ScrapingStatusLoadMatch } from '../CrackedApiReferenceTypes';
declare class ScrapingStatusEntity extends CrackedApiReferenceEntityBase<ScrapingStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScrapingStatusEntity): ScrapingStatusEntity;
    load(this: any, reqmatch?: ScrapingStatusLoadMatch, ctrl?: Control): Promise<ScrapingStatusEntity>;
}
export { ScrapingStatusEntity };
