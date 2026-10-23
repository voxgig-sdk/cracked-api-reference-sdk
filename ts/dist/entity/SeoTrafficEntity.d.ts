import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SeoTraffic, SeoTrafficListMatch } from '../CrackedApiReferenceTypes';
declare class SeoTrafficEntity extends CrackedApiReferenceEntityBase<SeoTraffic> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SeoTrafficEntity): SeoTrafficEntity;
    list(this: any, reqmatch?: SeoTrafficListMatch, ctrl?: Control): Promise<SeoTrafficEntity[]>;
}
export { SeoTrafficEntity };
