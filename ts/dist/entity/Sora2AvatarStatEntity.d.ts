import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Sora2AvatarStat, Sora2AvatarStatLoadMatch } from '../CrackedApiReferenceTypes';
declare class Sora2AvatarStatEntity extends CrackedApiReferenceEntityBase<Sora2AvatarStat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: Sora2AvatarStatEntity): Sora2AvatarStatEntity;
    load(this: any, reqmatch?: Sora2AvatarStatLoadMatch, ctrl?: Control): Promise<Sora2AvatarStatEntity>;
}
export { Sora2AvatarStatEntity };
