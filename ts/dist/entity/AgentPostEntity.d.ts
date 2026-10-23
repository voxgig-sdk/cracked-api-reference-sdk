import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentPost, AgentPostListMatch } from '../CrackedApiReferenceTypes';
declare class AgentPostEntity extends CrackedApiReferenceEntityBase<AgentPost> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentPostEntity): AgentPostEntity;
    list(this: any, reqmatch?: AgentPostListMatch, ctrl?: Control): Promise<AgentPostEntity[]>;
}
export { AgentPostEntity };
