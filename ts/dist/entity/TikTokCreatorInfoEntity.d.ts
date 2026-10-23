import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { TikTokCreatorInfo, TikTokCreatorInfoListMatch } from '../CrackedApiReferenceTypes';
declare class TikTokCreatorInfoEntity extends CrackedApiReferenceEntityBase<TikTokCreatorInfo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: TikTokCreatorInfoEntity): TikTokCreatorInfoEntity;
    list(this: any, reqmatch?: TikTokCreatorInfoListMatch, ctrl?: Control): Promise<TikTokCreatorInfoEntity[]>;
}
export { TikTokCreatorInfoEntity };
