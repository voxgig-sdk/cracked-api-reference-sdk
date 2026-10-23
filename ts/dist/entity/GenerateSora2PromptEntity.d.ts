import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { GenerateSora2Prompt, GenerateSora2PromptLoadMatch } from '../CrackedApiReferenceTypes';
declare class GenerateSora2PromptEntity extends CrackedApiReferenceEntityBase<GenerateSora2Prompt> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: GenerateSora2PromptEntity): GenerateSora2PromptEntity;
    load(this: any, reqmatch?: GenerateSora2PromptLoadMatch, ctrl?: Control): Promise<GenerateSora2PromptEntity>;
}
export { GenerateSora2PromptEntity };
