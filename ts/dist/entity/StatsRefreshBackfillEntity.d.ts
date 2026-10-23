import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { StatsRefreshBackfill, StatsRefreshBackfillCreateData } from '../CrackedApiReferenceTypes';
declare class StatsRefreshBackfillEntity extends CrackedApiReferenceEntityBase<StatsRefreshBackfill> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StatsRefreshBackfillEntity): StatsRefreshBackfillEntity;
    create(this: any, reqdata?: StatsRefreshBackfillCreateData, ctrl?: Control): Promise<StatsRefreshBackfillEntity>;
}
export { StatsRefreshBackfillEntity };
