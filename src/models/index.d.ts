import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Status {
  CREADO = "CREADO",
  ATENDIDO = "ATENDIDO",
  ENTREGADO = "ENTREGADO"
}

export enum Tipoentrega {
  DOMICILIO = "DOMICILIO",
  FARMACIA = "FARMACIA"
}

type EagerImageInfo = {
  readonly altText?: string | null;
  readonly format?: string | null;
  readonly imageType?: string | null;
  readonly url?: string | null;
  readonly galleryIndex?: number | null;
}

type LazyImageInfo = {
  readonly altText?: string | null;
  readonly format?: string | null;
  readonly imageType?: string | null;
  readonly url?: string | null;
  readonly galleryIndex?: number | null;
}

export declare type ImageInfo = LazyLoading extends LazyLoadingDisabled ? EagerImageInfo : LazyImageInfo

export declare const ImageInfo: (new (init: ModelInit<ImageInfo>) => ImageInfo)

type EagerFeatureInfo = {
  readonly code?: (string | null)[] | null;
  readonly comparable?: boolean | null;
  readonly name?: string | null;
  readonly range?: string | null;
  readonly value?: string | null;
}

type LazyFeatureInfo = {
  readonly code?: (string | null)[] | null;
  readonly comparable?: boolean | null;
  readonly name?: string | null;
  readonly range?: string | null;
  readonly value?: string | null;
}

export declare type FeatureInfo = LazyLoading extends LazyLoadingDisabled ? EagerFeatureInfo : LazyFeatureInfo

export declare const FeatureInfo: (new (init: ModelInit<FeatureInfo>) => FeatureInfo)

type EagerClassificationInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly features?: (FeatureInfo | null)[] | null;
}

type LazyClassificationInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly features?: (FeatureInfo | null)[] | null;
}

export declare type ClassificationInfo = LazyLoading extends LazyLoadingDisabled ? EagerClassificationInfo : LazyClassificationInfo

export declare const ClassificationInfo: (new (init: ModelInit<ClassificationInfo>) => ClassificationInfo)

type EagerCategoryInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
}

type LazyCategoryInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
}

export declare type CategoryInfo = LazyLoading extends LazyLoadingDisabled ? EagerCategoryInfo : LazyCategoryInfo

export declare const CategoryInfo: (new (init: ModelInit<CategoryInfo>) => CategoryInfo)

type EagerDETALLEPEDIDO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DETALLEPEDIDO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: string | null;
  readonly precio?: string | null;
  readonly subtotal?: string | null;
  readonly pedidoID: string;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDETALLEPEDIDO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DETALLEPEDIDO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: string | null;
  readonly precio?: string | null;
  readonly subtotal?: string | null;
  readonly pedidoID: string;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DETALLEPEDIDO = LazyLoading extends LazyLoadingDisabled ? EagerDETALLEPEDIDO : LazyDETALLEPEDIDO

export declare const DETALLEPEDIDO: (new (init: ModelInit<DETALLEPEDIDO>) => DETALLEPEDIDO) & {
  copyOf(source: DETALLEPEDIDO, mutator: (draft: MutableModel<DETALLEPEDIDO>) => MutableModel<DETALLEPEDIDO> | void): DETALLEPEDIDO;
}

type EagerPEDIDO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PEDIDO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fecha?: string | null;
  readonly hora?: string | null;
  readonly numero?: string | null;
  readonly total?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly tipoEntrega?: Tipoentrega | keyof typeof Tipoentrega | null;
  readonly clientesID: string;
  readonly DETALLEPEDIDOS?: (DETALLEPEDIDO | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPEDIDO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PEDIDO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fecha?: string | null;
  readonly hora?: string | null;
  readonly numero?: string | null;
  readonly total?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly tipoEntrega?: Tipoentrega | keyof typeof Tipoentrega | null;
  readonly clientesID: string;
  readonly DETALLEPEDIDOS: AsyncCollection<DETALLEPEDIDO>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PEDIDO = LazyLoading extends LazyLoadingDisabled ? EagerPEDIDO : LazyPEDIDO

export declare const PEDIDO: (new (init: ModelInit<PEDIDO>) => PEDIDO) & {
  copyOf(source: PEDIDO, mutator: (draft: MutableModel<PEDIDO>) => MutableModel<PEDIDO> | void): PEDIDO;
}

type EagerCLIENTES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENTES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreCompleto?: string | null;
  readonly direccion?: string | null;
  readonly whats?: string | null;
  readonly cp?: string | null;
  readonly pass?: string | null;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly PEDIDOS?: (PEDIDO | null)[] | null;
  readonly farmaciaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCLIENTES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENTES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreCompleto?: string | null;
  readonly direccion?: string | null;
  readonly whats?: string | null;
  readonly cp?: string | null;
  readonly pass?: string | null;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly PEDIDOS: AsyncCollection<PEDIDO>;
  readonly farmaciaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CLIENTES = LazyLoading extends LazyLoadingDisabled ? EagerCLIENTES : LazyCLIENTES

export declare const CLIENTES: (new (init: ModelInit<CLIENTES>) => CLIENTES) & {
  copyOf(source: CLIENTES, mutator: (draft: MutableModel<CLIENTES>) => MutableModel<CLIENTES> | void): CLIENTES;
}

type EagerINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly additionalDescription?: string | null;
  readonly antibiotic?: boolean | null;
  readonly availableForPickup?: boolean | null;
  readonly brandName?: string | null;
  readonly code?: string | null;
  readonly configurable?: boolean | null;
  readonly description?: string | null;
  readonly eans?: (string | null)[] | null;
  readonly exclusionCode?: string | null;
  readonly hasDiscountPrice?: string | null;
  readonly isLabProduct?: boolean | null;
  readonly name?: string | null;
  readonly naturalHealth?: boolean | null;
  readonly numberOfReviews?: number | null;
  readonly potentialPromotions?: (string | null)[] | null;
  readonly presentation?: string | null;
  readonly productReferences?: (string | null)[] | null;
  readonly providerName?: string | null;
  readonly purchasable?: boolean | null;
  readonly registrationDate?: string | null;
  readonly summary?: string | null;
  readonly url?: string | null;
  readonly priceCurrencyIso?: string | null;
  readonly priceFormattedValue?: string | null;
  readonly priceType?: string | null;
  readonly priceValue?: number | null;
  readonly categories?: (CategoryInfo | null)[] | null;
  readonly classifications?: (ClassificationInfo | null)[] | null;
  readonly labInfoCode?: string | null;
  readonly labInfoMessage?: string | null;
  readonly stockIsValueRounded?: boolean | null;
  readonly stockLevel?: number | null;
  readonly stockLevelStatus?: string | null;
  readonly numero?: number | null;
  readonly images?: (ImageInfo | null)[] | null;
  readonly farmaciaID: string;
  readonly DETALLEPEDIDOS?: (DETALLEPEDIDO | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly additionalDescription?: string | null;
  readonly antibiotic?: boolean | null;
  readonly availableForPickup?: boolean | null;
  readonly brandName?: string | null;
  readonly code?: string | null;
  readonly configurable?: boolean | null;
  readonly description?: string | null;
  readonly eans?: (string | null)[] | null;
  readonly exclusionCode?: string | null;
  readonly hasDiscountPrice?: string | null;
  readonly isLabProduct?: boolean | null;
  readonly name?: string | null;
  readonly naturalHealth?: boolean | null;
  readonly numberOfReviews?: number | null;
  readonly potentialPromotions?: (string | null)[] | null;
  readonly presentation?: string | null;
  readonly productReferences?: (string | null)[] | null;
  readonly providerName?: string | null;
  readonly purchasable?: boolean | null;
  readonly registrationDate?: string | null;
  readonly summary?: string | null;
  readonly url?: string | null;
  readonly priceCurrencyIso?: string | null;
  readonly priceFormattedValue?: string | null;
  readonly priceType?: string | null;
  readonly priceValue?: number | null;
  readonly categories?: (CategoryInfo | null)[] | null;
  readonly classifications?: (ClassificationInfo | null)[] | null;
  readonly labInfoCode?: string | null;
  readonly labInfoMessage?: string | null;
  readonly stockIsValueRounded?: boolean | null;
  readonly stockLevel?: number | null;
  readonly stockLevelStatus?: string | null;
  readonly numero?: number | null;
  readonly images?: (ImageInfo | null)[] | null;
  readonly farmaciaID: string;
  readonly DETALLEPEDIDOS: AsyncCollection<DETALLEPEDIDO>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVENTARIO = LazyLoading extends LazyLoadingDisabled ? EagerINVENTARIO : LazyINVENTARIO

export declare const INVENTARIO: (new (init: ModelInit<INVENTARIO>) => INVENTARIO) & {
  copyOf(source: INVENTARIO, mutator: (draft: MutableModel<INVENTARIO>) => MutableModel<INVENTARIO> | void): INVENTARIO;
}

type EagerGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly userName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: string | null;
  readonly blocked?: string | null;
  readonly createdBy?: string | null;
  readonly farmaciaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly userName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: string | null;
  readonly blocked?: string | null;
  readonly createdBy?: string | null;
  readonly farmaciaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GERENTE = LazyLoading extends LazyLoadingDisabled ? EagerGERENTE : LazyGERENTE

export declare const GERENTE: (new (init: ModelInit<GERENTE>) => GERENTE) & {
  copyOf(source: GERENTE, mutator: (draft: MutableModel<GERENTE>) => MutableModel<GERENTE> | void): GERENTE;
}

type EagerFARMACIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FARMACIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccion?: string | null;
  readonly cp?: string | null;
  readonly createdBy?: string | null;
  readonly rfc?: string | null;
  readonly contactPhone?: string | null;
  readonly codSerial?: string | null;
  readonly INVENTARIOS?: (INVENTARIO | null)[] | null;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly CLIENTES?: (CLIENTES | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFARMACIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FARMACIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccion?: string | null;
  readonly cp?: string | null;
  readonly createdBy?: string | null;
  readonly rfc?: string | null;
  readonly contactPhone?: string | null;
  readonly codSerial?: string | null;
  readonly INVENTARIOS: AsyncCollection<INVENTARIO>;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly CLIENTES: AsyncCollection<CLIENTES>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FARMACIA = LazyLoading extends LazyLoadingDisabled ? EagerFARMACIA : LazyFARMACIA

export declare const FARMACIA: (new (init: ModelInit<FARMACIA>) => FARMACIA) & {
  copyOf(source: FARMACIA, mutator: (draft: MutableModel<FARMACIA>) => MutableModel<FARMACIA> | void): FARMACIA;
}