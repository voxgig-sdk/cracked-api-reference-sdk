import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScanSocialsPublic, ScanSocialsPublicCreateData } from '../CrackedApiReferenceTypes';
declare class ScanSocialsPublicEntity extends CrackedApiReferenceEntityBase<ScanSocialsPublic> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScanSocialsPublicEntity): ScanSocialsPublicEntity;
    create(this: any, reqdata?: ScanSocialsPublicCreateData, ctrl?: Control): Promise<ScanSocialsPublicEntity>;
}
export { ScanSocialsPublicEntity };
