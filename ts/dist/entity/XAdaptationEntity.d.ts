import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { XAdaptation, XAdaptationLoadMatch } from '../CrackedApiReferenceTypes';
declare class XAdaptationEntity extends CrackedApiReferenceEntityBase<XAdaptation> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: XAdaptationEntity): XAdaptationEntity;
    load(this: any, reqmatch?: XAdaptationLoadMatch, ctrl?: Control): Promise<XAdaptationEntity>;
}
export { XAdaptationEntity };
