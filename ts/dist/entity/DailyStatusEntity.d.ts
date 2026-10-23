import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { DailyStatus, DailyStatusLoadMatch } from '../CrackedApiReferenceTypes';
declare class DailyStatusEntity extends CrackedApiReferenceEntityBase<DailyStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: DailyStatusEntity): DailyStatusEntity;
    load(this: any, reqmatch?: DailyStatusLoadMatch, ctrl?: Control): Promise<DailyStatusEntity>;
}
export { DailyStatusEntity };
