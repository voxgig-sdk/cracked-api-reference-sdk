import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessCustomersHealth, AgentAccessCustomersHealthListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessCustomersHealthEntity extends CrackedApiReferenceEntityBase<AgentAccessCustomersHealth> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessCustomersHealthEntity): AgentAccessCustomersHealthEntity;
    list(this: any, reqmatch?: AgentAccessCustomersHealthListMatch, ctrl?: Control): Promise<AgentAccessCustomersHealthEntity[]>;
}
export { AgentAccessCustomersHealthEntity };
