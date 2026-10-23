import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { SlugValidation, SlugValidationLoadMatch } from '../CrackedApiReferenceTypes';
declare class SlugValidationEntity extends CrackedApiReferenceEntityBase<SlugValidation> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: SlugValidationEntity): SlugValidationEntity;
    load(this: any, reqmatch?: SlugValidationLoadMatch, ctrl?: Control): Promise<SlugValidationEntity>;
}
export { SlugValidationEntity };
