import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ShareAccessLink, ShareAccessLinkCreateData } from '../CrackedApiReferenceTypes';
declare class ShareAccessLinkEntity extends CrackedApiReferenceEntityBase<ShareAccessLink> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ShareAccessLinkEntity): ShareAccessLinkEntity;
    create(this: any, reqdata?: ShareAccessLinkCreateData, ctrl?: Control): Promise<ShareAccessLinkEntity>;
}
export { ShareAccessLinkEntity };
