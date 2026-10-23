import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Slide, SlideCreateData, SlideUpdateData } from '../CrackedApiReferenceTypes';
declare class SlideEntity extends CrackedApiReferenceEntityBase<Slide> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SlideEntity): SlideEntity;
    create(this: any, reqdata?: SlideCreateData, ctrl?: Control): Promise<SlideEntity>;
    update(this: any, reqdata?: SlideUpdateData, ctrl?: Control): Promise<SlideEntity>;
}
export { SlideEntity };
