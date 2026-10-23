import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Iri, IriCreateData } from '../CrackedApiReferenceTypes';
declare class IriEntity extends CrackedApiReferenceEntityBase<Iri> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IriEntity): IriEntity;
    create(this: any, reqdata?: IriCreateData, ctrl?: Control): Promise<IriEntity>;
}
export { IriEntity };
