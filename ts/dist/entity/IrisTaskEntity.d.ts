import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { IrisTask, IrisTaskListMatch, IrisTaskCreateData } from '../CrackedApiReferenceTypes';
declare class IrisTaskEntity extends CrackedApiReferenceEntityBase<IrisTask> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IrisTaskEntity): IrisTaskEntity;
    list(this: any, reqmatch?: IrisTaskListMatch, ctrl?: Control): Promise<IrisTaskEntity[]>;
    create(this: any, reqdata?: IrisTaskCreateData, ctrl?: Control): Promise<IrisTaskEntity>;
}
export { IrisTaskEntity };
