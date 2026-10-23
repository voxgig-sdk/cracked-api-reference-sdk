import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { LinkInDm, LinkInDmLoadMatch } from '../CrackedApiReferenceTypes';
declare class LinkInDmEntity extends CrackedApiReferenceEntityBase<LinkInDm> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LinkInDmEntity): LinkInDmEntity;
    load(this: any, reqmatch?: LinkInDmLoadMatch, ctrl?: Control): Promise<LinkInDmEntity>;
}
export { LinkInDmEntity };
