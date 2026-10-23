import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ActiveOnboarding, ActiveOnboardingLoadMatch } from '../CrackedApiReferenceTypes';
declare class ActiveOnboardingEntity extends CrackedApiReferenceEntityBase<ActiveOnboarding> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ActiveOnboardingEntity): ActiveOnboardingEntity;
    load(this: any, reqmatch?: ActiveOnboardingLoadMatch, ctrl?: Control): Promise<ActiveOnboardingEntity>;
}
export { ActiveOnboardingEntity };
