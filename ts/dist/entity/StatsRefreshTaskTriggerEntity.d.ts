import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { StatsRefreshTaskTrigger, StatsRefreshTaskTriggerCreateData } from '../CrackedApiReferenceTypes';
declare class StatsRefreshTaskTriggerEntity extends CrackedApiReferenceEntityBase<StatsRefreshTaskTrigger> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StatsRefreshTaskTriggerEntity): StatsRefreshTaskTriggerEntity;
    create(this: any, reqdata?: StatsRefreshTaskTriggerCreateData, ctrl?: Control): Promise<StatsRefreshTaskTriggerEntity>;
}
export { StatsRefreshTaskTriggerEntity };
