import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminUsersTableItem, AdminUsersTableItemListMatch } from '../CrackedApiReferenceTypes';
declare class AdminUsersTableItemEntity extends CrackedApiReferenceEntityBase<AdminUsersTableItem> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminUsersTableItemEntity): AdminUsersTableItemEntity;
    list(this: any, reqmatch?: AdminUsersTableItemListMatch, ctrl?: Control): Promise<AdminUsersTableItemEntity[]>;
}
export { AdminUsersTableItemEntity };
