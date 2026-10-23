import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { IrisConnector, IrisConnectorListMatch } from '../CrackedApiReferenceTypes';
declare class IrisConnectorEntity extends CrackedApiReferenceEntityBase<IrisConnector> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IrisConnectorEntity): IrisConnectorEntity;
    list(this: any, reqmatch?: IrisConnectorListMatch, ctrl?: Control): Promise<IrisConnectorEntity[]>;
}
export { IrisConnectorEntity };
