import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ReadRootGet, ReadRootGetLoadMatch } from '../CrackedApiReferenceTypes';
declare class ReadRootGetEntity extends CrackedApiReferenceEntityBase<ReadRootGet> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ReadRootGetEntity): ReadRootGetEntity;
    load(this: any, reqmatch?: ReadRootGetLoadMatch, ctrl?: Control): Promise<ReadRootGetEntity>;
}
export { ReadRootGetEntity };
