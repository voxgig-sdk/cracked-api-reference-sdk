import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminRecentSignup, AdminRecentSignupListMatch } from '../CrackedApiReferenceTypes';
declare class AdminRecentSignupEntity extends CrackedApiReferenceEntityBase<AdminRecentSignup> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminRecentSignupEntity): AdminRecentSignupEntity;
    list(this: any, reqmatch?: AdminRecentSignupListMatch, ctrl?: Control): Promise<AdminRecentSignupEntity[]>;
}
export { AdminRecentSignupEntity };
