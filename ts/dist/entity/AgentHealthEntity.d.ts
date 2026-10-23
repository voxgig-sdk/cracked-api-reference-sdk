import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentHealth, AgentHealthListMatch } from '../CrackedApiReferenceTypes';
declare class AgentHealthEntity extends CrackedApiReferenceEntityBase<AgentHealth> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentHealthEntity): AgentHealthEntity;
    list(this: any, reqmatch?: AgentHealthListMatch, ctrl?: Control): Promise<AgentHealthEntity[]>;
}
export { AgentHealthEntity };
