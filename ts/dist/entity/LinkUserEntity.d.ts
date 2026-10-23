import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { LinkUser, LinkUserCreateData } from '../CrackedApiReferenceTypes';
declare class LinkUserEntity extends CrackedApiReferenceEntityBase<LinkUser> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LinkUserEntity): LinkUserEntity;
    create(this: any, reqdata?: LinkUserCreateData, ctrl?: Control): Promise<LinkUserEntity>;
}
export { LinkUserEntity };
