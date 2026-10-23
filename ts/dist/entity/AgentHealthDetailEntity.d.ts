import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentHealthDetail, AgentHealthDetailListMatch } from '../CrackedApiReferenceTypes';
declare class AgentHealthDetailEntity extends CrackedApiReferenceEntityBase<AgentHealthDetail> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentHealthDetailEntity): AgentHealthDetailEntity;
    list(this: any, reqmatch?: AgentHealthDetailListMatch, ctrl?: Control): Promise<AgentHealthDetailEntity[]>;
}
export { AgentHealthDetailEntity };
