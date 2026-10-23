import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ResetProduct, ResetProductLoadMatch, ResetProductCreateData } from '../CrackedApiReferenceTypes';
declare class ResetProductEntity extends CrackedApiReferenceEntityBase<ResetProduct> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ResetProductEntity): ResetProductEntity;
    load(this: any, reqmatch?: ResetProductLoadMatch, ctrl?: Control): Promise<ResetProductEntity>;
    create(this: any, reqdata?: ResetProductCreateData, ctrl?: Control): Promise<ResetProductEntity>;
}
export { ResetProductEntity };
