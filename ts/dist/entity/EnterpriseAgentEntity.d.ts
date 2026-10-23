import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { EnterpriseAgent, EnterpriseAgentLoadMatch, EnterpriseAgentCreateData } from '../CrackedApiReferenceTypes';
declare class EnterpriseAgentEntity extends CrackedApiReferenceEntityBase<EnterpriseAgent> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: EnterpriseAgentEntity): EnterpriseAgentEntity;
    load(this: any, reqmatch?: EnterpriseAgentLoadMatch, ctrl?: Control): Promise<EnterpriseAgentEntity>;
    create(this: any, reqdata?: EnterpriseAgentCreateData, ctrl?: Control): Promise<EnterpriseAgentEntity>;
}
export { EnterpriseAgentEntity };
