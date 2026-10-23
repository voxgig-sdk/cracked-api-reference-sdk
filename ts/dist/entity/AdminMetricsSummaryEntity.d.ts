import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminMetricsSummary, AdminMetricsSummaryListMatch } from '../CrackedApiReferenceTypes';
declare class AdminMetricsSummaryEntity extends CrackedApiReferenceEntityBase<AdminMetricsSummary> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminMetricsSummaryEntity): AdminMetricsSummaryEntity;
    list(this: any, reqmatch?: AdminMetricsSummaryListMatch, ctrl?: Control): Promise<AdminMetricsSummaryEntity[]>;
}
export { AdminMetricsSummaryEntity };
