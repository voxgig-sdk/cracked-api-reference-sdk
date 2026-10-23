import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Site, SiteLoadMatch } from '../CrackedApiReferenceTypes';
declare class SiteEntity extends CrackedApiReferenceEntityBase<Site> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SiteEntity): SiteEntity;
    load(this: any, reqmatch?: SiteLoadMatch, ctrl?: Control): Promise<SiteEntity>;
}
export { SiteEntity };
