import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ScanSocialsStatus, ScanSocialsStatusLoadMatch } from '../CrackedApiReferenceTypes';
declare class ScanSocialsStatusEntity extends CrackedApiReferenceEntityBase<ScanSocialsStatus> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ScanSocialsStatusEntity): ScanSocialsStatusEntity;
    load(this: any, reqmatch?: ScanSocialsStatusLoadMatch, ctrl?: Control): Promise<ScanSocialsStatusEntity>;
}
export { ScanSocialsStatusEntity };
