import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminSlideshowImport, AdminSlideshowImportLoadMatch, AdminSlideshowImportCreateData } from '../CrackedApiReferenceTypes';
declare class AdminSlideshowImportEntity extends CrackedApiReferenceEntityBase<AdminSlideshowImport> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminSlideshowImportEntity): AdminSlideshowImportEntity;
    load(this: any, reqmatch?: AdminSlideshowImportLoadMatch, ctrl?: Control): Promise<AdminSlideshowImportEntity>;
    create(this: any, reqdata?: AdminSlideshowImportCreateData, ctrl?: Control): Promise<AdminSlideshowImportEntity>;
}
export { AdminSlideshowImportEntity };
