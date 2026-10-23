import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AnalyzeProduct, AnalyzeProductCreateData } from '../CrackedApiReferenceTypes';
declare class AnalyzeProductEntity extends CrackedApiReferenceEntityBase<AnalyzeProduct> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AnalyzeProductEntity): AnalyzeProductEntity;
    create(this: any, reqdata?: AnalyzeProductCreateData, ctrl?: Control): Promise<AnalyzeProductEntity>;
}
export { AnalyzeProductEntity };
