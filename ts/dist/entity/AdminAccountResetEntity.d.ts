import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminAccountReset, AdminAccountResetCreateData } from '../CrackedApiReferenceTypes';
declare class AdminAccountResetEntity extends CrackedApiReferenceEntityBase<AdminAccountReset> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminAccountResetEntity): AdminAccountResetEntity;
    create(this: any, reqdata?: AdminAccountResetCreateData, ctrl?: Control): Promise<AdminAccountResetEntity>;
}
export { AdminAccountResetEntity };
