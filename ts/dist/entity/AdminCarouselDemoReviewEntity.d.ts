import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminCarouselDemoReview, AdminCarouselDemoReviewLoadMatch, AdminCarouselDemoReviewCreateData, AdminCarouselDemoReviewUpdateData } from '../CrackedApiReferenceTypes';
declare class AdminCarouselDemoReviewEntity extends CrackedApiReferenceEntityBase<AdminCarouselDemoReview> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminCarouselDemoReviewEntity): AdminCarouselDemoReviewEntity;
    load(this: any, reqmatch?: AdminCarouselDemoReviewLoadMatch, ctrl?: Control): Promise<AdminCarouselDemoReviewEntity>;
    create(this: any, reqdata?: AdminCarouselDemoReviewCreateData, ctrl?: Control): Promise<AdminCarouselDemoReviewEntity>;
    update(this: any, reqdata?: AdminCarouselDemoReviewUpdateData, ctrl?: Control): Promise<AdminCarouselDemoReviewEntity>;
}
export { AdminCarouselDemoReviewEntity };
