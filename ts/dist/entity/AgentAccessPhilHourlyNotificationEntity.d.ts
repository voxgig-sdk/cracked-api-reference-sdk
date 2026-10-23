import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessPhilHourlyNotification, AgentAccessPhilHourlyNotificationLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessPhilHourlyNotificationEntity extends CrackedApiReferenceEntityBase<AgentAccessPhilHourlyNotification> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessPhilHourlyNotificationEntity): AgentAccessPhilHourlyNotificationEntity;
    load(this: any, reqmatch?: AgentAccessPhilHourlyNotificationLoadMatch, ctrl?: Control): Promise<AgentAccessPhilHourlyNotificationEntity>;
}
export { AgentAccessPhilHourlyNotificationEntity };
