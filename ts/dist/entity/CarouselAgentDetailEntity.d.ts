import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CarouselAgentDetail, CarouselAgentDetailLoadMatch } from '../CrackedApiReferenceTypes';
declare class CarouselAgentDetailEntity extends CrackedApiReferenceEntityBase<CarouselAgentDetail> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CarouselAgentDetailEntity): CarouselAgentDetailEntity;
    load(this: any, reqmatch?: CarouselAgentDetailLoadMatch, ctrl?: Control): Promise<CarouselAgentDetailEntity>;
}
export { CarouselAgentDetailEntity };
