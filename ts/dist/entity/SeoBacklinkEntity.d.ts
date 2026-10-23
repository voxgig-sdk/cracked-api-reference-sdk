import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SeoBacklink, SeoBacklinkListMatch } from '../CrackedApiReferenceTypes';
declare class SeoBacklinkEntity extends CrackedApiReferenceEntityBase<SeoBacklink> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SeoBacklinkEntity): SeoBacklinkEntity;
    list(this: any, reqmatch?: SeoBacklinkListMatch, ctrl?: Control): Promise<SeoBacklinkEntity[]>;
}
export { SeoBacklinkEntity };
