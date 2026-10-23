import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessUserSummary, AgentAccessUserSummaryListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessUserSummaryEntity extends CrackedApiReferenceEntityBase<AgentAccessUserSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessUserSummaryEntity): AgentAccessUserSummaryEntity;
    list(this: any, reqmatch?: AgentAccessUserSummaryListMatch, ctrl?: Control): Promise<AgentAccessUserSummaryEntity[]>;
}
export { AgentAccessUserSummaryEntity };
