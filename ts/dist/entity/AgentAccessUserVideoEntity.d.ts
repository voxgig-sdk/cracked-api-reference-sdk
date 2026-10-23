import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessUserVideo, AgentAccessUserVideoLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessUserVideoEntity extends CrackedApiReferenceEntityBase<AgentAccessUserVideo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessUserVideoEntity): AgentAccessUserVideoEntity;
    load(this: any, reqmatch?: AgentAccessUserVideoLoadMatch, ctrl?: Control): Promise<AgentAccessUserVideoEntity>;
}
export { AgentAccessUserVideoEntity };
