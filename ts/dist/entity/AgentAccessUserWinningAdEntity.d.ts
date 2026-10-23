import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessUserWinningAd, AgentAccessUserWinningAdListMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessUserWinningAdEntity extends CrackedApiReferenceEntityBase<AgentAccessUserWinningAd> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessUserWinningAdEntity): AgentAccessUserWinningAdEntity;
    list(this: any, reqmatch?: AgentAccessUserWinningAdListMatch, ctrl?: Control): Promise<AgentAccessUserWinningAdEntity[]>;
}
export { AgentAccessUserWinningAdEntity };
