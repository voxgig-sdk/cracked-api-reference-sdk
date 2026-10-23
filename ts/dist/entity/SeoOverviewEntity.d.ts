import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SeoOverview, SeoOverviewListMatch } from '../CrackedApiReferenceTypes';
declare class SeoOverviewEntity extends CrackedApiReferenceEntityBase<SeoOverview> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SeoOverviewEntity): SeoOverviewEntity;
    list(this: any, reqmatch?: SeoOverviewListMatch, ctrl?: Control): Promise<SeoOverviewEntity[]>;
}
export { SeoOverviewEntity };
