import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SocialScanPreview, SocialScanPreviewCreateData } from '../CrackedApiReferenceTypes';
declare class SocialScanPreviewEntity extends CrackedApiReferenceEntityBase<SocialScanPreview> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SocialScanPreviewEntity): SocialScanPreviewEntity;
    create(this: any, reqdata?: SocialScanPreviewCreateData, ctrl?: Control): Promise<SocialScanPreviewEntity>;
}
export { SocialScanPreviewEntity };
