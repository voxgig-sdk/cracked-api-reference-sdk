import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Healthrx, HealthrxLoadMatch, HealthrxCreateData } from '../CrackedApiReferenceTypes';
declare class HealthrxEntity extends CrackedApiReferenceEntityBase<Healthrx> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: HealthrxEntity): HealthrxEntity;
    load(this: any, reqmatch?: HealthrxLoadMatch, ctrl?: Control): Promise<HealthrxEntity>;
    create(this: any, reqdata?: HealthrxCreateData, ctrl?: Control): Promise<HealthrxEntity>;
}
export { HealthrxEntity };
