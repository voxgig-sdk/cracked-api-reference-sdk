import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { LinkInPost, LinkInPostLoadMatch } from '../CrackedApiReferenceTypes';
declare class LinkInPostEntity extends CrackedApiReferenceEntityBase<LinkInPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LinkInPostEntity): LinkInPostEntity;
    load(this: any, reqmatch?: LinkInPostLoadMatch, ctrl?: Control): Promise<LinkInPostEntity>;
}
export { LinkInPostEntity };
