import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { BulkTikTokStatsUpdate, BulkTikTokStatsUpdateUpdateData } from '../CrackedApiReferenceTypes';
declare class BulkTikTokStatsUpdateEntity extends CrackedApiReferenceEntityBase<BulkTikTokStatsUpdate> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: BulkTikTokStatsUpdateEntity): BulkTikTokStatsUpdateEntity;
    update(this: any, reqdata?: BulkTikTokStatsUpdateUpdateData, ctrl?: Control): Promise<BulkTikTokStatsUpdateEntity>;
}
export { BulkTikTokStatsUpdateEntity };
