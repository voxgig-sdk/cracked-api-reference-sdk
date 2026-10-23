import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { UserWithAvatarSubmission, UserWithAvatarSubmissionListMatch } from '../CrackedApiReferenceTypes';
declare class UserWithAvatarSubmissionEntity extends CrackedApiReferenceEntityBase<UserWithAvatarSubmission> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: UserWithAvatarSubmissionEntity): UserWithAvatarSubmissionEntity;
    list(this: any, reqmatch?: UserWithAvatarSubmissionListMatch, ctrl?: Control): Promise<UserWithAvatarSubmissionEntity[]>;
}
export { UserWithAvatarSubmissionEntity };
