import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AdminCarousel, AdminCarouselLoadMatch, AdminCarouselCreateData, AdminCarouselUpdateData } from '../CrackedApiReferenceTypes';
declare class AdminCarouselEntity extends CrackedApiReferenceEntityBase<AdminCarousel> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AdminCarouselEntity): AdminCarouselEntity;
    load(this: any, reqmatch?: AdminCarouselLoadMatch, ctrl?: Control): Promise<AdminCarouselEntity>;
    create(this: any, reqdata?: AdminCarouselCreateData, ctrl?: Control): Promise<AdminCarouselEntity>;
    update(this: any, reqdata?: AdminCarouselUpdateData, ctrl?: Control): Promise<AdminCarouselEntity>;
}
export { AdminCarouselEntity };
