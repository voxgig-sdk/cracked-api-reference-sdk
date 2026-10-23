import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Sora2AvatarAssetUpload, Sora2AvatarAssetUploadCreateData } from '../CrackedApiReferenceTypes';
declare class Sora2AvatarAssetUploadEntity extends CrackedApiReferenceEntityBase<Sora2AvatarAssetUpload> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: Sora2AvatarAssetUploadEntity): Sora2AvatarAssetUploadEntity;
    create(this: any, reqdata?: Sora2AvatarAssetUploadCreateData, ctrl?: Control): Promise<Sora2AvatarAssetUploadEntity>;
}
export { Sora2AvatarAssetUploadEntity };
