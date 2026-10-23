import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CreateCarousel, CreateCarouselCreateData } from '../CrackedApiReferenceTypes';
declare class CreateCarouselEntity extends CrackedApiReferenceEntityBase<CreateCarousel> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CreateCarouselEntity): CreateCarouselEntity;
    create(this: any, reqdata?: CreateCarouselCreateData, ctrl?: Control): Promise<CreateCarouselEntity>;
}
export { CreateCarouselEntity };
