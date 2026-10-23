import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { CreateResetProductV6, CreateResetProductV6CreateData } from '../CrackedApiReferenceTypes';
declare class CreateResetProductV6Entity extends CrackedApiReferenceEntityBase<CreateResetProductV6> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CreateResetProductV6Entity): CreateResetProductV6Entity;
    create(this: any, reqdata?: CreateResetProductV6CreateData, ctrl?: Control): Promise<CreateResetProductV6Entity>;
}
export { CreateResetProductV6Entity };
