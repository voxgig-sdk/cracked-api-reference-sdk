import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CarouselStatus, CarouselStatusListMatch } from '../CrackedApiReferenceTypes';
declare class CarouselStatusEntity extends CrackedApiReferenceEntityBase<CarouselStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CarouselStatusEntity): CarouselStatusEntity;
    list(this: any, reqmatch?: CarouselStatusListMatch, ctrl?: Control): Promise<CarouselStatusEntity[]>;
}
export { CarouselStatusEntity };
