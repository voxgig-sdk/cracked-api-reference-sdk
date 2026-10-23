import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SocialScanSave, SocialScanSaveCreateData } from '../CrackedApiReferenceTypes';
declare class SocialScanSaveEntity extends CrackedApiReferenceEntityBase<SocialScanSave> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SocialScanSaveEntity): SocialScanSaveEntity;
    create(this: any, reqdata?: SocialScanSaveCreateData, ctrl?: Control): Promise<SocialScanSaveEntity>;
}
export { SocialScanSaveEntity };
