import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { StatsRefreshOverview, StatsRefreshOverviewListMatch } from '../CrackedApiReferenceTypes';
declare class StatsRefreshOverviewEntity extends CrackedApiReferenceEntityBase<StatsRefreshOverview> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StatsRefreshOverviewEntity): StatsRefreshOverviewEntity;
    list(this: any, reqmatch?: StatsRefreshOverviewListMatch, ctrl?: Control): Promise<StatsRefreshOverviewEntity[]>;
}
export { StatsRefreshOverviewEntity };
