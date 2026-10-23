import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Activate, ActivateCreateData } from '../CrackedApiReferenceTypes';
declare class ActivateEntity extends CrackedApiReferenceEntityBase<Activate> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ActivateEntity): ActivateEntity;
    create(this: any, reqdata?: ActivateCreateData, ctrl?: Control): Promise<ActivateEntity>;
}
export { ActivateEntity };
