import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Sora2Avatar, Sora2AvatarLoadMatch, Sora2AvatarListMatch, Sora2AvatarCreateData, Sora2AvatarUpdateData } from '../CrackedApiReferenceTypes';
declare class Sora2AvatarEntity extends CrackedApiReferenceEntityBase<Sora2Avatar> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: Sora2AvatarEntity): Sora2AvatarEntity;
    load(this: any, reqmatch?: Sora2AvatarLoadMatch, ctrl?: Control): Promise<Sora2AvatarEntity>;
    list(this: any, reqmatch?: Sora2AvatarListMatch, ctrl?: Control): Promise<Sora2AvatarEntity[]>;
    create(this: any, reqdata?: Sora2AvatarCreateData, ctrl?: Control): Promise<Sora2AvatarEntity>;
    update(this: any, reqdata?: Sora2AvatarUpdateData, ctrl?: Control): Promise<Sora2AvatarEntity>;
}
export { Sora2AvatarEntity };
