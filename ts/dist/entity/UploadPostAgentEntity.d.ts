import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { UploadPostAgent, UploadPostAgentCreateData } from '../CrackedApiReferenceTypes';
declare class UploadPostAgentEntity extends CrackedApiReferenceEntityBase<UploadPostAgent> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: UploadPostAgentEntity): UploadPostAgentEntity;
    create(this: any, reqdata?: UploadPostAgentCreateData, ctrl?: Control): Promise<UploadPostAgentEntity>;
}
export { UploadPostAgentEntity };
