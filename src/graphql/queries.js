/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDETALLEPEDIDO = /* GraphQL */ `
  query GetDETALLEPEDIDO($id: ID!) {
    getDETALLEPEDIDO(id: $id) {
      id
      cantidad
      precio
      subtotal
      pedidoID
      inventarioID
      createdAt
      updatedAt
    }
  }
`;
export const listDETALLEPEDIDOS = /* GraphQL */ `
  query ListDETALLEPEDIDOS(
    $filter: ModelDETALLEPEDIDOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDETALLEPEDIDOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cantidad
        precio
        subtotal
        pedidoID
        inventarioID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const dETALLEPEDIDOSByPedidoID = /* GraphQL */ `
  query DETALLEPEDIDOSByPedidoID(
    $pedidoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDETALLEPEDIDOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dETALLEPEDIDOSByPedidoID(
      pedidoID: $pedidoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cantidad
        precio
        subtotal
        pedidoID
        inventarioID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const dETALLEPEDIDOSByInventarioID = /* GraphQL */ `
  query DETALLEPEDIDOSByInventarioID(
    $inventarioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDETALLEPEDIDOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dETALLEPEDIDOSByInventarioID(
      inventarioID: $inventarioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cantidad
        precio
        subtotal
        pedidoID
        inventarioID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPEDIDO = /* GraphQL */ `
  query GetPEDIDO($id: ID!) {
    getPEDIDO(id: $id) {
      id
      fecha
      hora
      numero
      total
      status
      tipoEntrega
      clientesID
      DETALLEPEDIDOS {
        items {
          id
          cantidad
          precio
          subtotal
          pedidoID
          inventarioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPEDIDOS = /* GraphQL */ `
  query ListPEDIDOS(
    $filter: ModelPEDIDOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPEDIDOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        hora
        numero
        total
        status
        tipoEntrega
        clientesID
        DETALLEPEDIDOS {
          items {
            id
            cantidad
            precio
            subtotal
            pedidoID
            inventarioID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const pEDIDOSByClientesID = /* GraphQL */ `
  query PEDIDOSByClientesID(
    $clientesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPEDIDOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pEDIDOSByClientesID(
      clientesID: $clientesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fecha
        hora
        numero
        total
        status
        tipoEntrega
        clientesID
        DETALLEPEDIDOS {
          items {
            id
            cantidad
            precio
            subtotal
            pedidoID
            inventarioID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCLIENTES = /* GraphQL */ `
  query GetCLIENTES($id: ID!) {
    getCLIENTES(id: $id) {
      id
      nombreCompleto
      direccion
      whats
      cp
      pass
      email
      username
      PEDIDOS {
        items {
          id
          fecha
          hora
          numero
          total
          status
          tipoEntrega
          clientesID
          DETALLEPEDIDOS {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      farmaciaID
      createdAt
      updatedAt
    }
  }
`;
export const listCLIENTES = /* GraphQL */ `
  query ListCLIENTES(
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCLIENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombreCompleto
        direccion
        whats
        cp
        pass
        email
        username
        PEDIDOS {
          items {
            id
            fecha
            hora
            numero
            total
            status
            tipoEntrega
            clientesID
            createdAt
            updatedAt
          }
          nextToken
        }
        farmaciaID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cLIENTESByFarmaciaID = /* GraphQL */ `
  query CLIENTESByFarmaciaID(
    $farmaciaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cLIENTESByFarmaciaID(
      farmaciaID: $farmaciaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombreCompleto
        direccion
        whats
        cp
        pass
        email
        username
        PEDIDOS {
          items {
            id
            fecha
            hora
            numero
            total
            status
            tipoEntrega
            clientesID
            createdAt
            updatedAt
          }
          nextToken
        }
        farmaciaID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getINVENTARIO = /* GraphQL */ `
  query GetINVENTARIO($id: ID!) {
    getINVENTARIO(id: $id) {
      id
      additionalDescription
      antibiotic
      availableForPickup
      brandName
      code
      configurable
      description
      eans
      exclusionCode
      hasDiscountPrice
      isLabProduct
      name
      naturalHealth
      numberOfReviews
      potentialPromotions
      presentation
      productReferences
      providerName
      purchasable
      registrationDate
      summary
      url
      priceCurrencyIso
      priceFormattedValue
      priceType
      priceValue
      categories {
        code
        name
        url
      }
      classifications {
        code
        name
        features {
          code
          comparable
          name
          range
          value
        }
      }
      labInfoCode
      labInfoMessage
      stockIsValueRounded
      stockLevel
      stockLevelStatus
      numero
      images {
        altText
        format
        imageType
        url
        galleryIndex
      }
      farmaciaID
      DETALLEPEDIDOS {
        items {
          id
          cantidad
          precio
          subtotal
          pedidoID
          inventarioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listINVENTARIOS = /* GraphQL */ `
  query ListINVENTARIOS(
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listINVENTARIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        additionalDescription
        antibiotic
        availableForPickup
        brandName
        code
        configurable
        description
        eans
        exclusionCode
        hasDiscountPrice
        isLabProduct
        name
        naturalHealth
        numberOfReviews
        potentialPromotions
        presentation
        productReferences
        providerName
        purchasable
        registrationDate
        summary
        url
        priceCurrencyIso
        priceFormattedValue
        priceType
        priceValue
        categories {
          code
          name
          url
        }
        classifications {
          code
          name
          features {
            code
            comparable
            name
            range
            value
          }
        }
        labInfoCode
        labInfoMessage
        stockIsValueRounded
        stockLevel
        stockLevelStatus
        numero
        images {
          altText
          format
          imageType
          url
          galleryIndex
        }
        farmaciaID
        DETALLEPEDIDOS {
          items {
            id
            cantidad
            precio
            subtotal
            pedidoID
            inventarioID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const iNVENTARIOSByFarmaciaID = /* GraphQL */ `
  query INVENTARIOSByFarmaciaID(
    $farmaciaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOSByFarmaciaID(
      farmaciaID: $farmaciaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        additionalDescription
        antibiotic
        availableForPickup
        brandName
        code
        configurable
        description
        eans
        exclusionCode
        hasDiscountPrice
        isLabProduct
        name
        naturalHealth
        numberOfReviews
        potentialPromotions
        presentation
        productReferences
        providerName
        purchasable
        registrationDate
        summary
        url
        priceCurrencyIso
        priceFormattedValue
        priceType
        priceValue
        categories {
          code
          name
          url
        }
        classifications {
          code
          name
          features {
            code
            comparable
            name
            range
            value
          }
        }
        labInfoCode
        labInfoMessage
        stockIsValueRounded
        stockLevel
        stockLevelStatus
        numero
        images {
          altText
          format
          imageType
          url
          galleryIndex
        }
        farmaciaID
        DETALLEPEDIDOS {
          items {
            id
            cantidad
            precio
            subtotal
            pedidoID
            inventarioID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGERENTE = /* GraphQL */ `
  query GetGERENTE($id: ID!) {
    getGERENTE(id: $id) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      farmaciaID
      createdAt
      updatedAt
    }
  }
`;
export const listGERENTES = /* GraphQL */ `
  query ListGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGERENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        userName
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        farmaciaID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const gERENTESByFarmaciaID = /* GraphQL */ `
  query GERENTESByFarmaciaID(
    $farmaciaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gERENTESByFarmaciaID(
      farmaciaID: $farmaciaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        userName
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        farmaciaID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFARMACIA = /* GraphQL */ `
  query GetFARMACIA($id: ID!) {
    getFARMACIA(id: $id) {
      id
      nombre
      direccion
      cp
      createdBy
      rfc
      contactPhone
      codSerial
      INVENTARIOS {
        items {
          id
          additionalDescription
          antibiotic
          availableForPickup
          brandName
          code
          configurable
          description
          eans
          exclusionCode
          hasDiscountPrice
          isLabProduct
          name
          naturalHealth
          numberOfReviews
          potentialPromotions
          presentation
          productReferences
          providerName
          purchasable
          registrationDate
          summary
          url
          priceCurrencyIso
          priceFormattedValue
          priceType
          priceValue
          categories {
            code
            name
            url
          }
          classifications {
            code
            name
          }
          labInfoCode
          labInfoMessage
          stockIsValueRounded
          stockLevel
          stockLevelStatus
          numero
          images {
            altText
            format
            imageType
            url
            galleryIndex
          }
          farmaciaID
          DETALLEPEDIDOS {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          farmaciaID
          createdAt
          updatedAt
        }
        nextToken
      }
      CLIENTES {
        items {
          id
          nombreCompleto
          direccion
          whats
          cp
          pass
          email
          username
          PEDIDOS {
            nextToken
          }
          farmaciaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFARMACIAS = /* GraphQL */ `
  query ListFARMACIAS(
    $filter: ModelFARMACIAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFARMACIAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        direccion
        cp
        createdBy
        rfc
        contactPhone
        codSerial
        INVENTARIOS {
          items {
            id
            additionalDescription
            antibiotic
            availableForPickup
            brandName
            code
            configurable
            description
            eans
            exclusionCode
            hasDiscountPrice
            isLabProduct
            name
            naturalHealth
            numberOfReviews
            potentialPromotions
            presentation
            productReferences
            providerName
            purchasable
            registrationDate
            summary
            url
            priceCurrencyIso
            priceFormattedValue
            priceType
            priceValue
            labInfoCode
            labInfoMessage
            stockIsValueRounded
            stockLevel
            stockLevelStatus
            numero
            farmaciaID
            createdAt
            updatedAt
          }
          nextToken
        }
        GERENTES {
          items {
            id
            nombres
            userName
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            farmaciaID
            createdAt
            updatedAt
          }
          nextToken
        }
        CLIENTES {
          items {
            id
            nombreCompleto
            direccion
            whats
            cp
            pass
            email
            username
            farmaciaID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
