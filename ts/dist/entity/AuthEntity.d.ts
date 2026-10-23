import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Auth, AuthCreateData } from '../CrackedApiReferenceTypes';
declare class AuthEntity extends CrackedApiReferenceEntityBase<Auth> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    create(this: any, reqdata?: AuthCreateData, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };
