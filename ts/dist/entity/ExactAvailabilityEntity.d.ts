import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ExactAvailability, ExactAvailabilityLoadMatch } from '../CrackedApiReferenceTypes';
declare class ExactAvailabilityEntity extends CrackedApiReferenceEntityBase<ExactAvailability> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ExactAvailabilityEntity): ExactAvailabilityEntity;
    load(this: any, reqmatch?: ExactAvailabilityLoadMatch, ctrl?: Control): Promise<ExactAvailabilityEntity>;
}
export { ExactAvailabilityEntity };
