import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { IrisUsage, IrisUsageListMatch } from '../CrackedApiReferenceTypes';
declare class IrisUsageEntity extends CrackedApiReferenceEntityBase<IrisUsage> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IrisUsageEntity): IrisUsageEntity;
    list(this: any, reqmatch?: IrisUsageListMatch, ctrl?: Control): Promise<IrisUsageEntity[]>;
}
export { IrisUsageEntity };
