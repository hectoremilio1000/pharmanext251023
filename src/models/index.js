// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "CREADO": "CREADO",
  "ATENDIDO": "ATENDIDO",
  "ENTREGADO": "ENTREGADO"
};

const Tipoentrega = {
  "DOMICILIO": "DOMICILIO",
  "FARMACIA": "FARMACIA"
};

const { DETALLEPEDIDO, PEDIDO, CLIENTES, INVENTARIO, GERENTE, FARMACIA, ImageInfo, FeatureInfo, ClassificationInfo, CategoryInfo } = initSchema(schema);

export {
  DETALLEPEDIDO,
  PEDIDO,
  CLIENTES,
  INVENTARIO,
  GERENTE,
  FARMACIA,
  Status,
  Tipoentrega,
  ImageInfo,
  FeatureInfo,
  ClassificationInfo,
  CategoryInfo
};