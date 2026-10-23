import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Pexel, PexelListMatch } from '../CrackedApiReferenceTypes';
declare class PexelEntity extends CrackedApiReferenceEntityBase<Pexel> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: PexelEntity): PexelEntity;
    list(this: any, reqmatch?: PexelListMatch, ctrl?: Control): Promise<PexelEntity[]>;
}
export { PexelEntity };
