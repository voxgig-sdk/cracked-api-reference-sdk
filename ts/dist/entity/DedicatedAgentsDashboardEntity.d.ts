import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { DedicatedAgentsDashboard, DedicatedAgentsDashboardListMatch } from '../CrackedApiReferenceTypes';
declare class DedicatedAgentsDashboardEntity extends CrackedApiReferenceEntityBase<DedicatedAgentsDashboard> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: DedicatedAgentsDashboardEntity): DedicatedAgentsDashboardEntity;
    list(this: any, reqmatch?: DedicatedAgentsDashboardListMatch, ctrl?: Control): Promise<DedicatedAgentsDashboardEntity[]>;
}
export { DedicatedAgentsDashboardEntity };
