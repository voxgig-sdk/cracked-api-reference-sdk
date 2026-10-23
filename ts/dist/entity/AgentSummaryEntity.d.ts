import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentSummary, AgentSummaryListMatch } from '../CrackedApiReferenceTypes';
declare class AgentSummaryEntity extends CrackedApiReferenceEntityBase<AgentSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentSummaryEntity): AgentSummaryEntity;
    list(this: any, reqmatch?: AgentSummaryListMatch, ctrl?: Control): Promise<AgentSummaryEntity[]>;
}
export { AgentSummaryEntity };
