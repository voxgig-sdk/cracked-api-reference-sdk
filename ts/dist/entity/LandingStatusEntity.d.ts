import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { LandingStatus, LandingStatusLoadMatch } from '../CrackedApiReferenceTypes';
declare class LandingStatusEntity extends CrackedApiReferenceEntityBase<LandingStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LandingStatusEntity): LandingStatusEntity;
    load(this: any, reqmatch?: LandingStatusLoadMatch, ctrl?: Control): Promise<LandingStatusEntity>;
}
export { LandingStatusEntity };
