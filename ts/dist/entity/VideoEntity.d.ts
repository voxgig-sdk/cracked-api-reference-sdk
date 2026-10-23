import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { Video, VideoLoadMatch, VideoCreateData, VideoUpdateData, VideoRemoveMatch } from '../CrackedApiReferenceTypes';
declare class VideoEntity extends CrackedApiReferenceEntityBase<Video> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: VideoEntity): VideoEntity;
    load(this: any, reqmatch?: VideoLoadMatch, ctrl?: Control): Promise<VideoEntity>;
    create(this: any, reqdata?: VideoCreateData, ctrl?: Control): Promise<VideoEntity>;
    update(this: any, reqdata?: VideoUpdateData, ctrl?: Control): Promise<VideoEntity>;
    remove(this: any, reqmatch?: VideoRemoveMatch, ctrl?: Control): Promise<VideoEntity>;
}
export { VideoEntity };
