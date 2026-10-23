import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { IrisChat, IrisChatCreateData } from '../CrackedApiReferenceTypes';
declare class IrisChatEntity extends CrackedApiReferenceEntityBase<IrisChat> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: IrisChatEntity): IrisChatEntity;
    create(this: any, reqdata?: IrisChatCreateData, ctrl?: Control): Promise<IrisChatEntity>;
}
export { IrisChatEntity };
