import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentStat, AgentStatLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentStatEntity extends CrackedApiReferenceEntityBase<AgentStat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentStatEntity): AgentStatEntity;
    load(this: any, reqmatch?: AgentStatLoadMatch, ctrl?: Control): Promise<AgentStatEntity>;
}
export { AgentStatEntity };
