import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminCustomer, AdminCustomerListMatch } from '../CrackedApiReferenceTypes';
declare class AdminCustomerEntity extends CrackedApiReferenceEntityBase<AdminCustomer> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminCustomerEntity): AdminCustomerEntity;
    list(this: any, reqmatch?: AdminCustomerListMatch, ctrl?: Control): Promise<AdminCustomerEntity[]>;
}
export { AdminCustomerEntity };
