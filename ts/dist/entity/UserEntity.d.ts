import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { User, UserLoadMatch, UserUpdateData } from '../CrackedApiReferenceTypes';
declare class UserEntity extends CrackedApiReferenceEntityBase<User> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    load(this: any, reqmatch?: UserLoadMatch, ctrl?: Control): Promise<UserEntity>;
    update(this: any, reqdata?: UserUpdateData, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
