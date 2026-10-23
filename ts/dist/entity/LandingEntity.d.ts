import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Landing, LandingCreateData } from '../CrackedApiReferenceTypes';
declare class LandingEntity extends CrackedApiReferenceEntityBase<Landing> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LandingEntity): LandingEntity;
    create(this: any, reqdata?: LandingCreateData, ctrl?: Control): Promise<LandingEntity>;
}
export { LandingEntity };
