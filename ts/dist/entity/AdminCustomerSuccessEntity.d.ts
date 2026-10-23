import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminCustomerSuccess, AdminCustomerSuccessListMatch } from '../CrackedApiReferenceTypes';
declare class AdminCustomerSuccessEntity extends CrackedApiReferenceEntityBase<AdminCustomerSuccess> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminCustomerSuccessEntity): AdminCustomerSuccessEntity;
    list(this: any, reqmatch?: AdminCustomerSuccessListMatch, ctrl?: Control): Promise<AdminCustomerSuccessEntity[]>;
}
export { AdminCustomerSuccessEntity };
