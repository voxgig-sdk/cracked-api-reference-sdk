import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { OnboardingStatus, OnboardingStatusListMatch } from '../CrackedApiReferenceTypes';
declare class OnboardingStatusEntity extends CrackedApiReferenceEntityBase<OnboardingStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: OnboardingStatusEntity): OnboardingStatusEntity;
    list(this: any, reqmatch?: OnboardingStatusListMatch, ctrl?: Control): Promise<OnboardingStatusEntity[]>;
}
export { OnboardingStatusEntity };
