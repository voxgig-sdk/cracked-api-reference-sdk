import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Agent, AgentListMatch, AgentUpdateData } from '../CrackedApiReferenceTypes';
declare class AgentEntity extends CrackedApiReferenceEntityBase<Agent> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentEntity): AgentEntity;
    list(this: any, reqmatch?: AgentListMatch, ctrl?: Control): Promise<AgentEntity[]>;
    update(this: any, reqdata?: AgentUpdateData, ctrl?: Control): Promise<AgentEntity>;
}
export { AgentEntity };
