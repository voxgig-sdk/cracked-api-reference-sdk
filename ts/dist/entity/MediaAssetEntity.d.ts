import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { MediaAsset, MediaAssetLoadMatch, MediaAssetCreateData } from '../CrackedApiReferenceTypes';
declare class MediaAssetEntity extends CrackedApiReferenceEntityBase<MediaAsset> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: MediaAssetEntity): MediaAssetEntity;
    load(this: any, reqmatch?: MediaAssetLoadMatch, ctrl?: Control): Promise<MediaAssetEntity>;
    create(this: any, reqdata?: MediaAssetCreateData, ctrl?: Control): Promise<MediaAssetEntity>;
}
export { MediaAssetEntity };
