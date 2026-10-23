import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ReRollVideo, ReRollVideoCreateData } from '../CrackedApiReferenceTypes';
declare class ReRollVideoEntity extends CrackedApiReferenceEntityBase<ReRollVideo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ReRollVideoEntity): ReRollVideoEntity;
    create(this: any, reqdata?: ReRollVideoCreateData, ctrl?: Control): Promise<ReRollVideoEntity>;
}
export { ReRollVideoEntity };
