import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ActivateUser, ActivateUserCreateData } from '../CrackedApiReferenceTypes';
declare class ActivateUserEntity extends CrackedApiReferenceEntityBase<ActivateUser> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ActivateUserEntity): ActivateUserEntity;
    create(this: any, reqdata?: ActivateUserCreateData, ctrl?: Control): Promise<ActivateUserEntity>;
}
export { ActivateUserEntity };
