import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Microdrama, MicrodramaLoadMatch, MicrodramaCreateData, MicrodramaUpdateData } from '../CrackedApiReferenceTypes';
declare class MicrodramaEntity extends CrackedApiReferenceEntityBase<Microdrama> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: MicrodramaEntity): MicrodramaEntity;
    load(this: any, reqmatch?: MicrodramaLoadMatch, ctrl?: Control): Promise<MicrodramaEntity>;
    create(this: any, reqdata?: MicrodramaCreateData, ctrl?: Control): Promise<MicrodramaEntity>;
    update(this: any, reqdata?: MicrodramaUpdateData, ctrl?: Control): Promise<MicrodramaEntity>;
}
export { MicrodramaEntity };
