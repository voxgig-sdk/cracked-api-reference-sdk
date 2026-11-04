import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { RootGet, RootGetLoadMatch } from '../CrackedApiReferenceTypes';
declare class RootGetEntity extends CrackedApiReferenceEntityBase<RootGet> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: RootGetEntity): RootGetEntity;
    load(this: any, reqmatch?: RootGetLoadMatch, ctrl?: Control): Promise<RootGetEntity>;
}
export { RootGetEntity };
