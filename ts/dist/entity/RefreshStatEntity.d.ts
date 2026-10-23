import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { RefreshStat, RefreshStatCreateData } from '../CrackedApiReferenceTypes';
declare class RefreshStatEntity extends CrackedApiReferenceEntityBase<RefreshStat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: RefreshStatEntity): RefreshStatEntity;
    create(this: any, reqdata?: RefreshStatCreateData, ctrl?: Control): Promise<RefreshStatEntity>;
}
export { RefreshStatEntity };
