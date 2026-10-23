import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminLandingTask, AdminLandingTaskCreateData } from '../CrackedApiReferenceTypes';
declare class AdminLandingTaskEntity extends CrackedApiReferenceEntityBase<AdminLandingTask> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminLandingTaskEntity): AdminLandingTaskEntity;
    create(this: any, reqdata?: AdminLandingTaskCreateData, ctrl?: Control): Promise<AdminLandingTaskEntity>;
}
export { AdminLandingTaskEntity };
