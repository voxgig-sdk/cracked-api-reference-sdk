import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { AssignAgent, AssignAgentCreateData } from '../CrackedApiReferenceTypes';
declare class AssignAgentEntity extends CrackedApiReferenceEntityBase<AssignAgent> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AssignAgentEntity): AssignAgentEntity;
    create(this: any, reqdata?: AssignAgentCreateData, ctrl?: Control): Promise<AssignAgentEntity>;
}
export { AssignAgentEntity };
