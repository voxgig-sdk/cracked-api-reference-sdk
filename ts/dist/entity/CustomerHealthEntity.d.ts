import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CustomerHealth, CustomerHealthLoadMatch } from '../CrackedApiReferenceTypes';
declare class CustomerHealthEntity extends CrackedApiReferenceEntityBase<CustomerHealth> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CustomerHealthEntity): CustomerHealthEntity;
    load(this: any, reqmatch?: CustomerHealthLoadMatch, ctrl?: Control): Promise<CustomerHealthEntity>;
}
export { CustomerHealthEntity };
