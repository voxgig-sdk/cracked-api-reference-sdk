import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { LinkInBio, LinkInBioLoadMatch } from '../CrackedApiReferenceTypes';
declare class LinkInBioEntity extends CrackedApiReferenceEntityBase<LinkInBio> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: LinkInBioEntity): LinkInBioEntity;
    load(this: any, reqmatch?: LinkInBioLoadMatch, ctrl?: Control): Promise<LinkInBioEntity>;
}
export { LinkInBioEntity };
