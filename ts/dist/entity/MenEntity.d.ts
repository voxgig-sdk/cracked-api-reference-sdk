import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Men, MenListMatch } from '../CrackedApiReferenceTypes';
declare class MenEntity extends CrackedApiReferenceEntityBase<Men> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: MenEntity): MenEntity;
    list(this: any, reqmatch?: MenListMatch, ctrl?: Control): Promise<MenEntity[]>;
}
export { MenEntity };
