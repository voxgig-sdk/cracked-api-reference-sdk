import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessOverview, AgentAccessOverviewLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessOverviewEntity extends CrackedApiReferenceEntityBase<AgentAccessOverview> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessOverviewEntity): AgentAccessOverviewEntity;
    load(this: any, reqmatch?: AgentAccessOverviewLoadMatch, ctrl?: Control): Promise<AgentAccessOverviewEntity>;
}
export { AgentAccessOverviewEntity };
