import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { UsersHealth, UsersHealthListMatch } from '../CrackedApiReferenceTypes';
declare class UsersHealthEntity extends CrackedApiReferenceEntityBase<UsersHealth> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: UsersHealthEntity): UsersHealthEntity;
    list(this: any, reqmatch?: UsersHealthListMatch, ctrl?: Control): Promise<UsersHealthEntity[]>;
}
export { UsersHealthEntity };
