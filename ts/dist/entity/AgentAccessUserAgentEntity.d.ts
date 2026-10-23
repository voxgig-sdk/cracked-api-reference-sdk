import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessUserAgent, AgentAccessUserAgentListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessUserAgentEntity extends CrackedApiReferenceEntityBase<AgentAccessUserAgent> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessUserAgentEntity): AgentAccessUserAgentEntity;
    list(this: any, reqmatch?: AgentAccessUserAgentListMatch, ctrl?: Control): Promise<AgentAccessUserAgentEntity[]>;
}
export { AgentAccessUserAgentEntity };
