import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentsSummary, AgentsSummaryLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentsSummaryEntity extends CrackedApiReferenceEntityBase<AgentsSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentsSummaryEntity): AgentsSummaryEntity;
    load(this: any, reqmatch?: AgentsSummaryLoadMatch, ctrl?: Control): Promise<AgentsSummaryEntity>;
}
export { AgentsSummaryEntity };
