import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminHealthrx, AdminHealthrxLoadMatch, AdminHealthrxCreateData, AdminHealthrxUpdateData } from '../CrackedApiReferenceTypes';
declare class AdminHealthrxEntity extends CrackedApiReferenceEntityBase<AdminHealthrx> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminHealthrxEntity): AdminHealthrxEntity;
    load(this: any, reqmatch?: AdminHealthrxLoadMatch, ctrl?: Control): Promise<AdminHealthrxEntity>;
    create(this: any, reqdata?: AdminHealthrxCreateData, ctrl?: Control): Promise<AdminHealthrxEntity>;
    update(this: any, reqdata?: AdminHealthrxUpdateData, ctrl?: Control): Promise<AdminHealthrxEntity>;
}
export { AdminHealthrxEntity };
