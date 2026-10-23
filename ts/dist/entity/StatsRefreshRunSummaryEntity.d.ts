import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { StatsRefreshRunSummary, StatsRefreshRunSummaryListMatch } from '../CrackedApiReferenceTypes';
declare class StatsRefreshRunSummaryEntity extends CrackedApiReferenceEntityBase<StatsRefreshRunSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StatsRefreshRunSummaryEntity): StatsRefreshRunSummaryEntity;
    list(this: any, reqmatch?: StatsRefreshRunSummaryListMatch, ctrl?: Control): Promise<StatsRefreshRunSummaryEntity[]>;
}
export { StatsRefreshRunSummaryEntity };
