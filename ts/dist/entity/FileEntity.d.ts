import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { File, FileCreateData } from '../CrackedApiReferenceTypes';
declare class FileEntity extends CrackedApiReferenceEntityBase<File> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: FileEntity): FileEntity;
    create(this: any, reqdata?: FileCreateData, ctrl?: Control): Promise<FileEntity>;
}
export { FileEntity };
