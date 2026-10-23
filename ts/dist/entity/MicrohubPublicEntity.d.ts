import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { MicrohubPublic, MicrohubPublicLoadMatch } from '../CrackedApiReferenceTypes';
declare class MicrohubPublicEntity extends CrackedApiReferenceEntityBase<MicrohubPublic> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: MicrohubPublicEntity): MicrohubPublicEntity;
    load(this: any, reqmatch?: MicrohubPublicLoadMatch, ctrl?: Control): Promise<MicrohubPublicEntity>;
}
export { MicrohubPublicEntity };
