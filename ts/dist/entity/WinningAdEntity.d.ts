import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { WinningAd, WinningAdListMatch } from '../CrackedApiReferenceTypes';
declare class WinningAdEntity extends CrackedApiReferenceEntityBase<WinningAd> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: WinningAdEntity): WinningAdEntity;
    list(this: any, reqmatch?: WinningAdListMatch, ctrl?: Control): Promise<WinningAdEntity[]>;
}
export { WinningAdEntity };
