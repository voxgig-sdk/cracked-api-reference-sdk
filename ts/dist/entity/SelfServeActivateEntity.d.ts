import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SelfServeActivate, SelfServeActivateCreateData } from '../CrackedApiReferenceTypes';
declare class SelfServeActivateEntity extends CrackedApiReferenceEntityBase<SelfServeActivate> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SelfServeActivateEntity): SelfServeActivateEntity;
    create(this: any, reqdata?: SelfServeActivateCreateData, ctrl?: Control): Promise<SelfServeActivateEntity>;
}
export { SelfServeActivateEntity };
