import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CustomerHealthAllCustomersItem, CustomerHealthAllCustomersItemListMatch } from '../CrackedApiReferenceTypes';
declare class CustomerHealthAllCustomersItemEntity extends CrackedApiReferenceEntityBase<CustomerHealthAllCustomersItem> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CustomerHealthAllCustomersItemEntity): CustomerHealthAllCustomersItemEntity;
    list(this: any, reqmatch?: CustomerHealthAllCustomersItemListMatch, ctrl?: Control): Promise<CustomerHealthAllCustomersItemEntity[]>;
}
export { CustomerHealthAllCustomersItemEntity };
