/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FARMACIACreateFormInputValues = {
    nombre?: string;
    direccion?: string;
    cp?: string;
    createdBy?: string;
    rfc?: string;
    contactPhone?: string;
    codSerial?: string;
};
export declare type FARMACIACreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
    cp?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    rfc?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    codSerial?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FARMACIACreateFormOverridesProps = {
    FARMACIACreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
    cp?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    rfc?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    codSerial?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FARMACIACreateFormProps = React.PropsWithChildren<{
    overrides?: FARMACIACreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FARMACIACreateFormInputValues) => FARMACIACreateFormInputValues;
    onSuccess?: (fields: FARMACIACreateFormInputValues) => void;
    onError?: (fields: FARMACIACreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FARMACIACreateFormInputValues) => FARMACIACreateFormInputValues;
    onValidate?: FARMACIACreateFormValidationValues;
} & React.CSSProperties>;
export default function FARMACIACreateForm(props: FARMACIACreateFormProps): React.ReactElement;
