import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessPhilStatsRefresh, AgentAccessPhilStatsRefreshLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessPhilStatsRefreshEntity extends CrackedApiReferenceEntityBase<AgentAccessPhilStatsRefresh> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessPhilStatsRefreshEntity): AgentAccessPhilStatsRefreshEntity;
    load(this: any, reqmatch?: AgentAccessPhilStatsRefreshLoadMatch, ctrl?: Control): Promise<AgentAccessPhilStatsRefreshEntity>;
}
export { AgentAccessPhilStatsRefreshEntity };
