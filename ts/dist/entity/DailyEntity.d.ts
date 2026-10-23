import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Daily, DailyCreateData } from '../CrackedApiReferenceTypes';
declare class DailyEntity extends CrackedApiReferenceEntityBase<Daily> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: DailyEntity): DailyEntity;
    create(this: any, reqdata?: DailyCreateData, ctrl?: Control): Promise<DailyEntity>;
}
export { DailyEntity };
