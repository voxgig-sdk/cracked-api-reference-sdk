import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessUserPhoneFarm, AgentAccessUserPhoneFarmListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessUserPhoneFarmEntity extends CrackedApiReferenceEntityBase<AgentAccessUserPhoneFarm> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessUserPhoneFarmEntity): AgentAccessUserPhoneFarmEntity;
    list(this: any, reqmatch?: AgentAccessUserPhoneFarmListMatch, ctrl?: Control): Promise<AgentAccessUserPhoneFarmEntity[]>;
}
export { AgentAccessUserPhoneFarmEntity };
