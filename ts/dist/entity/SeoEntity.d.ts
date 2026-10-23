import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Seo, SeoLoadMatch } from '../CrackedApiReferenceTypes';
declare class SeoEntity extends CrackedApiReferenceEntityBase<Seo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SeoEntity): SeoEntity;
    load(this: any, reqmatch?: SeoLoadMatch, ctrl?: Control): Promise<SeoEntity>;
}
export { SeoEntity };
