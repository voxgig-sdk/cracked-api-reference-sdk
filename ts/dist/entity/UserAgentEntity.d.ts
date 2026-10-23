import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { UserAgent, UserAgentListMatch, UserAgentCreateData } from '../CrackedApiReferenceTypes';
declare class UserAgentEntity extends CrackedApiReferenceEntityBase<UserAgent> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: UserAgentEntity): UserAgentEntity;
    list(this: any, reqmatch?: UserAgentListMatch, ctrl?: Control): Promise<UserAgentEntity[]>;
    create(this: any, reqdata?: UserAgentCreateData, ctrl?: Control): Promise<UserAgentEntity>;
}
export { UserAgentEntity };
