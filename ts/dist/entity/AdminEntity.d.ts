import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Admin, AdminLoadMatch, AdminListMatch, AdminCreateData, AdminUpdateData, AdminRemoveMatch } from '../CrackedApiReferenceTypes';
declare class AdminEntity extends CrackedApiReferenceEntityBase<Admin> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminEntity): AdminEntity;
    load(this: any, reqmatch?: AdminLoadMatch, ctrl?: Control): Promise<AdminEntity>;
    list(this: any, reqmatch?: AdminListMatch, ctrl?: Control): Promise<AdminEntity[]>;
    create(this: any, reqdata?: AdminCreateData, ctrl?: Control): Promise<AdminEntity>;
    update(this: any, reqdata?: AdminUpdateData, ctrl?: Control): Promise<AdminEntity>;
    remove(this: any, reqmatch?: AdminRemoveMatch, ctrl?: Control): Promise<AdminEntity>;
}
export { AdminEntity };
