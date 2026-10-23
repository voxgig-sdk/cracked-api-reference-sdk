import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { IrisStatus, IrisStatusListMatch } from '../CrackedApiReferenceTypes';
declare class IrisStatusEntity extends CrackedApiReferenceEntityBase<IrisStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IrisStatusEntity): IrisStatusEntity;
    list(this: any, reqmatch?: IrisStatusListMatch, ctrl?: Control): Promise<IrisStatusEntity[]>;
}
export { IrisStatusEntity };
