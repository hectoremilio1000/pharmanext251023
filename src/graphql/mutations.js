/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDETALLEPEDIDO = /* GraphQL */ `
  mutation CreateDETALLEPEDIDO(
    $input: CreateDETALLEPEDIDOInput!
    $condition: ModelDETALLEPEDIDOConditionInput
  ) {
    createDETALLEPEDIDO(input: $input, condition: $condition) {
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
export const updateDETALLEPEDIDO = /* GraphQL */ `
  mutation UpdateDETALLEPEDIDO(
    $input: UpdateDETALLEPEDIDOInput!
    $condition: ModelDETALLEPEDIDOConditionInput
  ) {
    updateDETALLEPEDIDO(input: $input, condition: $condition) {
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
export const deleteDETALLEPEDIDO = /* GraphQL */ `
  mutation DeleteDETALLEPEDIDO(
    $input: DeleteDETALLEPEDIDOInput!
    $condition: ModelDETALLEPEDIDOConditionInput
  ) {
    deleteDETALLEPEDIDO(input: $input, condition: $condition) {
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
export const createPEDIDO = /* GraphQL */ `
  mutation CreatePEDIDO(
    $input: CreatePEDIDOInput!
    $condition: ModelPEDIDOConditionInput
  ) {
    createPEDIDO(input: $input, condition: $condition) {
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
export const updatePEDIDO = /* GraphQL */ `
  mutation UpdatePEDIDO(
    $input: UpdatePEDIDOInput!
    $condition: ModelPEDIDOConditionInput
  ) {
    updatePEDIDO(input: $input, condition: $condition) {
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
export const deletePEDIDO = /* GraphQL */ `
  mutation DeletePEDIDO(
    $input: DeletePEDIDOInput!
    $condition: ModelPEDIDOConditionInput
  ) {
    deletePEDIDO(input: $input, condition: $condition) {
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
export const createCLIENTES = /* GraphQL */ `
  mutation CreateCLIENTES(
    $input: CreateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    createCLIENTES(input: $input, condition: $condition) {
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
export const updateCLIENTES = /* GraphQL */ `
  mutation UpdateCLIENTES(
    $input: UpdateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    updateCLIENTES(input: $input, condition: $condition) {
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
export const deleteCLIENTES = /* GraphQL */ `
  mutation DeleteCLIENTES(
    $input: DeleteCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    deleteCLIENTES(input: $input, condition: $condition) {
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
export const createINVENTARIO = /* GraphQL */ `
  mutation CreateINVENTARIO(
    $input: CreateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    createINVENTARIO(input: $input, condition: $condition) {
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
export const updateINVENTARIO = /* GraphQL */ `
  mutation UpdateINVENTARIO(
    $input: UpdateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    updateINVENTARIO(input: $input, condition: $condition) {
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
export const deleteINVENTARIO = /* GraphQL */ `
  mutation DeleteINVENTARIO(
    $input: DeleteINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    deleteINVENTARIO(input: $input, condition: $condition) {
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
export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
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
export const updateGERENTE = /* GraphQL */ `
  mutation UpdateGERENTE(
    $input: UpdateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    updateGERENTE(input: $input, condition: $condition) {
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
export const deleteGERENTE = /* GraphQL */ `
  mutation DeleteGERENTE(
    $input: DeleteGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    deleteGERENTE(input: $input, condition: $condition) {
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
export const createFARMACIA = /* GraphQL */ `
  mutation CreateFARMACIA(
    $input: CreateFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    createFARMACIA(input: $input, condition: $condition) {
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
export const updateFARMACIA = /* GraphQL */ `
  mutation UpdateFARMACIA(
    $input: UpdateFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    updateFARMACIA(input: $input, condition: $condition) {
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
export const deleteFARMACIA = /* GraphQL */ `
  mutation DeleteFARMACIA(
    $input: DeleteFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    deleteFARMACIA(input: $input, condition: $condition) {
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
