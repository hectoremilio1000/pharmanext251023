/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FARMACIA } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FARMACIAUpdateFormInputValues = {
    nombre?: string;
    direccion?: string;
    cp?: string;
    createdBy?: string;
    rfc?: string;
    contactPhone?: string;
    codSerial?: string;
};
export declare type FARMACIAUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
    cp?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    rfc?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    codSerial?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FARMACIAUpdateFormOverridesProps = {
    FARMACIAUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
    cp?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    rfc?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    codSerial?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FARMACIAUpdateFormProps = React.PropsWithChildren<{
    overrides?: FARMACIAUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fARMACIA?: FARMACIA;
    onSubmit?: (fields: FARMACIAUpdateFormInputValues) => FARMACIAUpdateFormInputValues;
    onSuccess?: (fields: FARMACIAUpdateFormInputValues) => void;
    onError?: (fields: FARMACIAUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FARMACIAUpdateFormInputValues) => FARMACIAUpdateFormInputValues;
    onValidate?: FARMACIAUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FARMACIAUpdateForm(props: FARMACIAUpdateFormProps): React.ReactElement;
