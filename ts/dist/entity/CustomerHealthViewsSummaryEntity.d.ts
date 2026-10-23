import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CustomerHealthViewsSummary, CustomerHealthViewsSummaryListMatch } from '../CrackedApiReferenceTypes';
declare class CustomerHealthViewsSummaryEntity extends CrackedApiReferenceEntityBase<CustomerHealthViewsSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CustomerHealthViewsSummaryEntity): CustomerHealthViewsSummaryEntity;
    list(this: any, reqmatch?: CustomerHealthViewsSummaryListMatch, ctrl?: Control): Promise<CustomerHealthViewsSummaryEntity[]>;
}
export { CustomerHealthViewsSummaryEntity };
