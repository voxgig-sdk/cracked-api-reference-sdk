import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Style, StyleLoadMatch } from '../CrackedApiReferenceTypes';
declare class StyleEntity extends CrackedApiReferenceEntityBase<Style> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: StyleEntity): StyleEntity;
    load(this: any, reqmatch?: StyleLoadMatch, ctrl?: Control): Promise<StyleEntity>;
}
export { StyleEntity };
