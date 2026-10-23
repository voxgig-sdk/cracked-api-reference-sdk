import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { LandingStat, LandingStatLoadMatch } from '../CrackedApiReferenceTypes';
declare class LandingStatEntity extends CrackedApiReferenceEntityBase<LandingStat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LandingStatEntity): LandingStatEntity;
    load(this: any, reqmatch?: LandingStatLoadMatch, ctrl?: Control): Promise<LandingStatEntity>;
}
export { LandingStatEntity };
