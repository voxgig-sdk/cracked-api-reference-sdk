import { CrackedApiReferenceEntityBase } from '../CrackedApiReferenceEntityBase';
import type { CrackedApiReferenceSDK } from '../CrackedApiReferenceSDK';
import type { Control } from '../types';
import type { ProductDashboardView, ProductDashboardViewListMatch } from '../CrackedApiReferenceTypes';
declare class ProductDashboardViewEntity extends CrackedApiReferenceEntityBase<ProductDashboardView> {
    constructor(client: CrackedApiReferenceSDK, entopts: any);
    make(this: ProductDashboardViewEntity): ProductDashboardViewEntity;
    list(this: any, reqmatch?: ProductDashboardViewListMatch, ctrl?: Control): Promise<ProductDashboardViewEntity[]>;
}
export { ProductDashboardViewEntity };
