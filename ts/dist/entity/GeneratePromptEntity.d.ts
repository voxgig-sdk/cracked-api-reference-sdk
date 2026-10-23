import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { GeneratePrompt, GeneratePromptCreateData } from '../CrackedApiReferenceTypes';
declare class GeneratePromptEntity extends CrackedApiReferenceEntityBase<GeneratePrompt> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: GeneratePromptEntity): GeneratePromptEntity;
    create(this: any, reqdata?: GeneratePromptCreateData, ctrl?: Control): Promise<GeneratePromptEntity>;
}
export { GeneratePromptEntity };
