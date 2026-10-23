import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentHealthCustomerOption, AgentHealthCustomerOptionListMatch } from '../CrackedApiReferenceTypes';
declare class AgentHealthCustomerOptionEntity extends CrackedApiReferenceEntityBase<AgentHealthCustomerOption> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentHealthCustomerOptionEntity): AgentHealthCustomerOptionEntity;
    list(this: any, reqmatch?: AgentHealthCustomerOptionListMatch, ctrl?: Control): Promise<AgentHealthCustomerOptionEntity[]>;
}
export { AgentHealthCustomerOptionEntity };
