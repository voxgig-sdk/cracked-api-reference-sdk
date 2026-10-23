import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { IrisCapability, IrisCapabilityCreateData } from '../CrackedApiReferenceTypes';
declare class IrisCapabilityEntity extends CrackedApiReferenceEntityBase<IrisCapability> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IrisCapabilityEntity): IrisCapabilityEntity;
    create(this: any, reqdata?: IrisCapabilityCreateData, ctrl?: Control): Promise<IrisCapabilityEntity>;
}
export { IrisCapabilityEntity };
