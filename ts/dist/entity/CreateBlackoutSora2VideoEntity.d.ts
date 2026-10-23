import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CreateBlackoutSora2Video, CreateBlackoutSora2VideoCreateData } from '../CrackedApiReferenceTypes';
declare class CreateBlackoutSora2VideoEntity extends CrackedApiReferenceEntityBase<CreateBlackoutSora2Video> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CreateBlackoutSora2VideoEntity): CreateBlackoutSora2VideoEntity;
    create(this: any, reqdata?: CreateBlackoutSora2VideoCreateData, ctrl?: Control): Promise<CreateBlackoutSora2VideoEntity>;
}
export { CreateBlackoutSora2VideoEntity };
