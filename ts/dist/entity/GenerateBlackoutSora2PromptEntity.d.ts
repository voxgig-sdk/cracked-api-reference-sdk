import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { GenerateBlackoutSora2Prompt, GenerateBlackoutSora2PromptCreateData } from '../CrackedApiReferenceTypes';
declare class GenerateBlackoutSora2PromptEntity extends CrackedApiReferenceEntityBase<GenerateBlackoutSora2Prompt> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: GenerateBlackoutSora2PromptEntity): GenerateBlackoutSora2PromptEntity;
    create(this: any, reqdata?: GenerateBlackoutSora2PromptCreateData, ctrl?: Control): Promise<GenerateBlackoutSora2PromptEntity>;
}
export { GenerateBlackoutSora2PromptEntity };
