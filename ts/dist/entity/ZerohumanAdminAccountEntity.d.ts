import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ZerohumanAdminAccount, ZerohumanAdminAccountListMatch } from '../CrackedApiReferenceTypes';
declare class ZerohumanAdminAccountEntity extends CrackedApiReferenceEntityBase<ZerohumanAdminAccount> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ZerohumanAdminAccountEntity): ZerohumanAdminAccountEntity;
    list(this: any, reqmatch?: ZerohumanAdminAccountListMatch, ctrl?: Control): Promise<ZerohumanAdminAccountEntity[]>;
}
export { ZerohumanAdminAccountEntity };
