import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Social, SocialLoadMatch, SocialListMatch, SocialCreateData, SocialRemoveMatch } from '../CrackedApiReferenceTypes';
declare class SocialEntity extends CrackedApiReferenceEntityBase<Social> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SocialEntity): SocialEntity;
    load(this: any, reqmatch?: SocialLoadMatch, ctrl?: Control): Promise<SocialEntity>;
    list(this: any, reqmatch?: SocialListMatch, ctrl?: Control): Promise<SocialEntity[]>;
    create(this: any, reqdata?: SocialCreateData, ctrl?: Control): Promise<SocialEntity>;
    remove(this: any, reqmatch?: SocialRemoveMatch, ctrl?: Control): Promise<SocialEntity>;
}
export { SocialEntity };
