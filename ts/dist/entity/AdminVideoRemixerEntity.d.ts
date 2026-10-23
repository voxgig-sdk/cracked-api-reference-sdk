import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminVideoRemixer, AdminVideoRemixerLoadMatch, AdminVideoRemixerCreateData, AdminVideoRemixerUpdateData, AdminVideoRemixerPatchData, AdminVideoRemixerRemoveMatch } from '../CrackedApiReferenceTypes';
declare class AdminVideoRemixerEntity extends CrackedApiReferenceEntityBase<AdminVideoRemixer> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminVideoRemixerEntity): AdminVideoRemixerEntity;
    load(this: any, reqmatch?: AdminVideoRemixerLoadMatch, ctrl?: Control): Promise<AdminVideoRemixerEntity>;
    create(this: any, reqdata?: AdminVideoRemixerCreateData, ctrl?: Control): Promise<AdminVideoRemixerEntity>;
    update(this: any, reqdata?: AdminVideoRemixerUpdateData, ctrl?: Control): Promise<AdminVideoRemixerEntity>;
    patch(this: any, reqdata?: AdminVideoRemixerPatchData, ctrl?: Control): Promise<AdminVideoRemixerEntity>;
    remove(this: any, reqmatch?: AdminVideoRemixerRemoveMatch, ctrl?: Control): Promise<AdminVideoRemixerEntity>;
}
export { AdminVideoRemixerEntity };
