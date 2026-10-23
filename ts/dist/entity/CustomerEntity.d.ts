import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Customer, CustomerListMatch } from '../CrackedApiReferenceTypes';
declare class CustomerEntity extends CrackedApiReferenceEntityBase<Customer> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    list(this: any, reqmatch?: CustomerListMatch, ctrl?: Control): Promise<CustomerEntity[]>;
}
export { CustomerEntity };
