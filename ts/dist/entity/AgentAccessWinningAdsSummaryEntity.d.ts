import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessWinningAdsSummary, AgentAccessWinningAdsSummaryListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessWinningAdsSummaryEntity extends CrackedApiReferenceEntityBase<AgentAccessWinningAdsSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessWinningAdsSummaryEntity): AgentAccessWinningAdsSummaryEntity;
    list(this: any, reqmatch?: AgentAccessWinningAdsSummaryListMatch, ctrl?: Control): Promise<AgentAccessWinningAdsSummaryEntity[]>;
}
export { AgentAccessWinningAdsSummaryEntity };
