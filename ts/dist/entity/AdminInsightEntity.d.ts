import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminInsight, AdminInsightLoadMatch, AdminInsightListMatch } from '../CrackedApiReferenceTypes';
declare class AdminInsightEntity extends CrackedApiReferenceEntityBase<AdminInsight> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminInsightEntity): AdminInsightEntity;
    load(this: any, reqmatch?: AdminInsightLoadMatch, ctrl?: Control): Promise<AdminInsightEntity>;
    list(this: any, reqmatch?: AdminInsightListMatch, ctrl?: Control): Promise<AdminInsightEntity[]>;
}
export { AdminInsightEntity };
