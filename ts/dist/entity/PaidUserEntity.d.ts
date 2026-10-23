import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { PaidUser, PaidUserListMatch } from '../CrackedApiReferenceTypes';
declare class PaidUserEntity extends CrackedApiReferenceEntityBase<PaidUser> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: PaidUserEntity): PaidUserEntity;
    list(this: any, reqmatch?: PaidUserListMatch, ctrl?: Control): Promise<PaidUserEntity[]>;
}
export { PaidUserEntity };
