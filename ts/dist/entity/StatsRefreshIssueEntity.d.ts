import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { StatsRefreshIssue, StatsRefreshIssueListMatch } from '../CrackedApiReferenceTypes';
declare class StatsRefreshIssueEntity extends CrackedApiReferenceEntityBase<StatsRefreshIssue> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StatsRefreshIssueEntity): StatsRefreshIssueEntity;
    list(this: any, reqmatch?: StatsRefreshIssueListMatch, ctrl?: Control): Promise<StatsRefreshIssueEntity[]>;
}
export { StatsRefreshIssueEntity };
