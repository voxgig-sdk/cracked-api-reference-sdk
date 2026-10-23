import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { InitResetProductV6, InitResetProductV6CreateData } from '../CrackedApiReferenceTypes';
declare class InitResetProductV6Entity extends CrackedApiReferenceEntityBase<InitResetProductV6> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: InitResetProductV6Entity): InitResetProductV6Entity;
    create(this: any, reqdata?: InitResetProductV6CreateData, ctrl?: Control): Promise<InitResetProductV6Entity>;
}
export { InitResetProductV6Entity };
