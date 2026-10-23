import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Stat, StatListMatch } from '../CrackedApiReferenceTypes';
declare class StatEntity extends CrackedApiReferenceEntityBase<Stat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StatEntity): StatEntity;
    list(this: any, reqmatch?: StatListMatch, ctrl?: Control): Promise<StatEntity[]>;
}
export { StatEntity };
