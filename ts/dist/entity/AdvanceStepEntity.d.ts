import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdvanceStep, AdvanceStepCreateData } from '../CrackedApiReferenceTypes';
declare class AdvanceStepEntity extends CrackedApiReferenceEntityBase<AdvanceStep> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdvanceStepEntity): AdvanceStepEntity;
    create(this: any, reqdata?: AdvanceStepCreateData, ctrl?: Control): Promise<AdvanceStepEntity>;
}
export { AdvanceStepEntity };
