import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SeoKeyword, SeoKeywordListMatch } from '../CrackedApiReferenceTypes';
declare class SeoKeywordEntity extends CrackedApiReferenceEntityBase<SeoKeyword> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SeoKeywordEntity): SeoKeywordEntity;
    list(this: any, reqmatch?: SeoKeywordListMatch, ctrl?: Control): Promise<SeoKeywordEntity[]>;
}
export { SeoKeywordEntity };
