import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CreateSora2Video, CreateSora2VideoCreateData } from '../CrackedApiReferenceTypes';
declare class CreateSora2VideoEntity extends CrackedApiReferenceEntityBase<CreateSora2Video> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CreateSora2VideoEntity): CreateSora2VideoEntity;
    create(this: any, reqdata?: CreateSora2VideoCreateData, ctrl?: Control): Promise<CreateSora2VideoEntity>;
}
export { CreateSora2VideoEntity };
