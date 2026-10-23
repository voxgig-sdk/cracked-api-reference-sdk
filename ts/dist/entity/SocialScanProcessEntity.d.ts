import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SocialScanProcess, SocialScanProcessCreateData } from '../CrackedApiReferenceTypes';
declare class SocialScanProcessEntity extends CrackedApiReferenceEntityBase<SocialScanProcess> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SocialScanProcessEntity): SocialScanProcessEntity;
    create(this: any, reqdata?: SocialScanProcessCreateData, ctrl?: Control): Promise<SocialScanProcessEntity>;
}
export { SocialScanProcessEntity };
