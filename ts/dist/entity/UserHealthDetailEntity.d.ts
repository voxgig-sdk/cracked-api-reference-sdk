import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { UserHealthDetail, UserHealthDetailListMatch } from '../CrackedApiReferenceTypes';
declare class UserHealthDetailEntity extends CrackedApiReferenceEntityBase<UserHealthDetail> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: UserHealthDetailEntity): UserHealthDetailEntity;
    list(this: any, reqmatch?: UserHealthDetailListMatch, ctrl?: Control): Promise<UserHealthDetailEntity[]>;
}
export { UserHealthDetailEntity };
