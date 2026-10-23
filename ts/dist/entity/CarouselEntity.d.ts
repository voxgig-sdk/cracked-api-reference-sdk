import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Carousel, CarouselLoadMatch, CarouselListMatch, CarouselCreateData } from '../CrackedApiReferenceTypes';
declare class CarouselEntity extends CrackedApiReferenceEntityBase<Carousel> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CarouselEntity): CarouselEntity;
    load(this: any, reqmatch?: CarouselLoadMatch, ctrl?: Control): Promise<CarouselEntity>;
    list(this: any, reqmatch?: CarouselListMatch, ctrl?: Control): Promise<CarouselEntity[]>;
    create(this: any, reqdata?: CarouselCreateData, ctrl?: Control): Promise<CarouselEntity>;
}
export { CarouselEntity };
