import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Comment, CommentLoadMatch } from '../CrackedApiReferenceTypes';
declare class CommentEntity extends CrackedApiReferenceEntityBase<Comment> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: CommentEntity): CommentEntity;
    load(this: any, reqmatch?: CommentLoadMatch, ctrl?: Control): Promise<CommentEntity>;
}
export { CommentEntity };
