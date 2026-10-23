import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { RemixerClipper, RemixerClipperLoadMatch, RemixerClipperCreateData } from '../CrackedApiReferenceTypes';
declare class RemixerClipperEntity extends CrackedApiReferenceEntityBase<RemixerClipper> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: RemixerClipperEntity): RemixerClipperEntity;
    load(this: any, reqmatch?: RemixerClipperLoadMatch, ctrl?: Control): Promise<RemixerClipperEntity>;
    create(this: any, reqdata?: RemixerClipperCreateData, ctrl?: Control): Promise<RemixerClipperEntity>;
}
export { RemixerClipperEntity };
