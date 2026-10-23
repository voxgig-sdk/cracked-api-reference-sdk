import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminSlideshowDiag, AdminSlideshowDiagCreateData } from '../CrackedApiReferenceTypes';
declare class AdminSlideshowDiagEntity extends CrackedApiReferenceEntityBase<AdminSlideshowDiag> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminSlideshowDiagEntity): AdminSlideshowDiagEntity;
    create(this: any, reqdata?: AdminSlideshowDiagCreateData, ctrl?: Control): Promise<AdminSlideshowDiagEntity>;
}
export { AdminSlideshowDiagEntity };
