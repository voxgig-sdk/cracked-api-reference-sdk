import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScheduleV2, ScheduleV2LoadMatch, ScheduleV2ListMatch, ScheduleV2CreateData, ScheduleV2UpdateData, ScheduleV2RemoveMatch } from '../CrackedApiReferenceTypes';
declare class ScheduleV2Entity extends CrackedApiReferenceEntityBase<ScheduleV2> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScheduleV2Entity): ScheduleV2Entity;
    load(this: any, reqmatch?: ScheduleV2LoadMatch, ctrl?: Control): Promise<ScheduleV2Entity>;
    list(this: any, reqmatch?: ScheduleV2ListMatch, ctrl?: Control): Promise<ScheduleV2Entity[]>;
    create(this: any, reqdata?: ScheduleV2CreateData, ctrl?: Control): Promise<ScheduleV2Entity>;
    update(this: any, reqdata?: ScheduleV2UpdateData, ctrl?: Control): Promise<ScheduleV2Entity>;
    remove(this: any, reqmatch?: ScheduleV2RemoveMatch, ctrl?: Control): Promise<ScheduleV2Entity>;
}
export { ScheduleV2Entity };
