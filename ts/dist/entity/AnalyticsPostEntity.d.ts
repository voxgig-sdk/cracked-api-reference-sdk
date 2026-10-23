import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AnalyticsPost, AnalyticsPostListMatch } from '../CrackedApiReferenceTypes';
declare class AnalyticsPostEntity extends CrackedApiReferenceEntityBase<AnalyticsPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AnalyticsPostEntity): AnalyticsPostEntity;
    list(this: any, reqmatch?: AnalyticsPostListMatch, ctrl?: Control): Promise<AnalyticsPostEntity[]>;
}
export { AnalyticsPostEntity };
