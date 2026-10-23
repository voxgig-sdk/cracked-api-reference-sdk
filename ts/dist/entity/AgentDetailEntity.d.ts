import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentDetail, AgentDetailListMatch, AgentDetailUpdateData } from '../CrackedApiReferenceTypes';
declare class AgentDetailEntity extends CrackedApiReferenceEntityBase<AgentDetail> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentDetailEntity): AgentDetailEntity;
    list(this: any, reqmatch?: AgentDetailListMatch, ctrl?: Control): Promise<AgentDetailEntity[]>;
    update(this: any, reqdata?: AgentDetailUpdateData, ctrl?: Control): Promise<AgentDetailEntity>;
}
export { AgentDetailEntity };
