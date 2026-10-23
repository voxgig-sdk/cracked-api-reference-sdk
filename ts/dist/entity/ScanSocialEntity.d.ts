import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScanSocial, ScanSocialCreateData } from '../CrackedApiReferenceTypes';
declare class ScanSocialEntity extends CrackedApiReferenceEntityBase<ScanSocial> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScanSocialEntity): ScanSocialEntity;
    create(this: any, reqdata?: ScanSocialCreateData, ctrl?: Control): Promise<ScanSocialEntity>;
}
export { ScanSocialEntity };
