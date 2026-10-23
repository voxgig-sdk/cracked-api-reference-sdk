import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminUserView, AdminUserViewListMatch, AdminUserViewCreateData, AdminUserViewUpdateData, AdminUserViewRemoveMatch } from '../CrackedApiReferenceTypes';
declare class AdminUserViewEntity extends CrackedApiReferenceEntityBase<AdminUserView> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminUserViewEntity): AdminUserViewEntity;
    list(this: any, reqmatch?: AdminUserViewListMatch, ctrl?: Control): Promise<AdminUserViewEntity[]>;
    create(this: any, reqdata?: AdminUserViewCreateData, ctrl?: Control): Promise<AdminUserViewEntity>;
    update(this: any, reqdata?: AdminUserViewUpdateData, ctrl?: Control): Promise<AdminUserViewEntity>;
    remove(this: any, reqmatch?: AdminUserViewRemoveMatch, ctrl?: Control): Promise<AdminUserViewEntity>;
}
export { AdminUserViewEntity };
