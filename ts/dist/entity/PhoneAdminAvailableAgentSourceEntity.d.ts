import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { PhoneAdminAvailableAgentSource, PhoneAdminAvailableAgentSourceListMatch } from '../CrackedApiReferenceTypes';
declare class PhoneAdminAvailableAgentSourceEntity extends CrackedApiReferenceEntityBase<PhoneAdminAvailableAgentSource> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: PhoneAdminAvailableAgentSourceEntity): PhoneAdminAvailableAgentSourceEntity;
    list(this: any, reqmatch?: PhoneAdminAvailableAgentSourceListMatch, ctrl?: Control): Promise<PhoneAdminAvailableAgentSourceEntity[]>;
}
export { PhoneAdminAvailableAgentSourceEntity };
