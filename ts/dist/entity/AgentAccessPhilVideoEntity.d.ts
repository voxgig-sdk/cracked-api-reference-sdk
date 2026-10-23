import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AgentAccessPhilVideo, AgentAccessPhilVideoLoadMatch } from '../CrackedApiReferenceTypes';
declare class AgentAccessPhilVideoEntity extends CrackedApiReferenceEntityBase<AgentAccessPhilVideo> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AgentAccessPhilVideoEntity): AgentAccessPhilVideoEntity;
    load(this: any, reqmatch?: AgentAccessPhilVideoLoadMatch, ctrl?: Control): Promise<AgentAccessPhilVideoEntity>;
}
export { AgentAccessPhilVideoEntity };
