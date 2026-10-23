import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AutoScheduleSetting, AutoScheduleSettingLoadMatch, AutoScheduleSettingUpdateData } from '../CrackedApiReferenceTypes';
declare class AutoScheduleSettingEntity extends CrackedApiReferenceEntityBase<AutoScheduleSetting> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AutoScheduleSettingEntity): AutoScheduleSettingEntity;
    load(this: any, reqmatch?: AutoScheduleSettingLoadMatch, ctrl?: Control): Promise<AutoScheduleSettingEntity>;
    update(this: any, reqdata?: AutoScheduleSettingUpdateData, ctrl?: Control): Promise<AutoScheduleSettingEntity>;
}
export { AutoScheduleSettingEntity };
