import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { VideoRemixerWorker, VideoRemixerWorkerCreateData } from '../CrackedApiReferenceTypes';
declare class VideoRemixerWorkerEntity extends CrackedApiReferenceEntityBase<VideoRemixerWorker> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: VideoRemixerWorkerEntity): VideoRemixerWorkerEntity;
    create(this: any, reqdata?: VideoRemixerWorkerCreateData, ctrl?: Control): Promise<VideoRemixerWorkerEntity>;
}
export { VideoRemixerWorkerEntity };
