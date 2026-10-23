import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CommentCampaign, CommentCampaignLoadMatch, CommentCampaignCreateData, CommentCampaignUpdateData } from '../CrackedApiReferenceTypes';
declare class CommentCampaignEntity extends CrackedApiReferenceEntityBase<CommentCampaign> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CommentCampaignEntity): CommentCampaignEntity;
    load(this: any, reqmatch?: CommentCampaignLoadMatch, ctrl?: Control): Promise<CommentCampaignEntity>;
    create(this: any, reqdata?: CommentCampaignCreateData, ctrl?: Control): Promise<CommentCampaignEntity>;
    update(this: any, reqdata?: CommentCampaignUpdateData, ctrl?: Control): Promise<CommentCampaignEntity>;
}
export { CommentCampaignEntity };
