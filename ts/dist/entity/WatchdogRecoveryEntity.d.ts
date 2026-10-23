import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { WatchdogRecovery, WatchdogRecoveryLoadMatch, WatchdogRecoveryCreateData } from '../CrackedApiReferenceTypes';
declare class WatchdogRecoveryEntity extends CrackedApiReferenceEntityBase<WatchdogRecovery> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: WatchdogRecoveryEntity): WatchdogRecoveryEntity;
    load(this: any, reqmatch?: WatchdogRecoveryLoadMatch, ctrl?: Control): Promise<WatchdogRecoveryEntity>;
    create(this: any, reqdata?: WatchdogRecoveryCreateData, ctrl?: Control): Promise<WatchdogRecoveryEntity>;
}
export { WatchdogRecoveryEntity };
