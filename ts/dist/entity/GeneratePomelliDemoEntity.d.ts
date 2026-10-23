import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { GeneratePomelliDemo, GeneratePomelliDemoCreateData } from '../CrackedApiReferenceTypes';
declare class GeneratePomelliDemoEntity extends CrackedApiReferenceEntityBase<GeneratePomelliDemo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: GeneratePomelliDemoEntity): GeneratePomelliDemoEntity;
    create(this: any, reqdata?: GeneratePomelliDemoCreateData, ctrl?: Control): Promise<GeneratePomelliDemoEntity>;
}
export { GeneratePomelliDemoEntity };
