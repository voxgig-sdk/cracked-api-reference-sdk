import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessUserPost, AgentAccessUserPostListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessUserPostEntity extends CrackedApiReferenceEntityBase<AgentAccessUserPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessUserPostEntity): AgentAccessUserPostEntity;
    list(this: any, reqmatch?: AgentAccessUserPostListMatch, ctrl?: Control): Promise<AgentAccessUserPostEntity[]>;
}
export { AgentAccessUserPostEntity };
