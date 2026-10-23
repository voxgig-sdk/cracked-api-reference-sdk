import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SeoAiMention, SeoAiMentionListMatch } from '../CrackedApiReferenceTypes';
declare class SeoAiMentionEntity extends CrackedApiReferenceEntityBase<SeoAiMention> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SeoAiMentionEntity): SeoAiMentionEntity;
    list(this: any, reqmatch?: SeoAiMentionListMatch, ctrl?: Control): Promise<SeoAiMentionEntity[]>;
}
export { SeoAiMentionEntity };
