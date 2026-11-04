import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScheduleQueue, ScheduleQueueUpdateData } from '../CrackedApiReferenceTypes';
declare class ScheduleQueueEntity extends CrackedApiReferenceEntityBase<ScheduleQueue> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScheduleQueueEntity): ScheduleQueueEntity;
    update(this: any, reqdata?: ScheduleQueueUpdateData, ctrl?: Control): Promise<ScheduleQueueEntity>;
}
export { ScheduleQueueEntity };
