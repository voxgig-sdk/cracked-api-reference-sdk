import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ExtractV2, ExtractV2CreateData } from '../CrackedApiReferenceTypes';
declare class ExtractV2Entity extends CrackedApiReferenceEntityBase<ExtractV2> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ExtractV2Entity): ExtractV2Entity;
    create(this: any, reqdata?: ExtractV2CreateData, ctrl?: Control): Promise<ExtractV2Entity>;
}
export { ExtractV2Entity };
