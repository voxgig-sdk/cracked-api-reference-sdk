import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { EnterpriseProduct, EnterpriseProductLoadMatch } from '../CrackedApiReferenceTypes';
declare class EnterpriseProductEntity extends CrackedApiReferenceEntityBase<EnterpriseProduct> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: EnterpriseProductEntity): EnterpriseProductEntity;
    load(this: any, reqmatch?: EnterpriseProductLoadMatch, ctrl?: Control): Promise<EnterpriseProductEntity>;
}
export { EnterpriseProductEntity };
