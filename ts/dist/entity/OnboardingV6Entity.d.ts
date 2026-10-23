import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { OnboardingV6, OnboardingV6RemoveMatch } from '../CrackedApiReferenceTypes';
declare class OnboardingV6Entity extends CrackedApiReferenceEntityBase<OnboardingV6> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: OnboardingV6Entity): OnboardingV6Entity;
    remove(this: any, reqmatch?: OnboardingV6RemoveMatch, ctrl?: Control): Promise<OnboardingV6Entity>;
}
export { OnboardingV6Entity };
