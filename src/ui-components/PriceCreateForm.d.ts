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
export declare type PriceCreateFormInputValues = {
    currencyIso?: string;
    formattedValue?: string;
    priceType?: string;
    value?: number;
};
export declare type PriceCreateFormValidationValues = {
    currencyIso?: ValidationFunction<string>;
    formattedValue?: ValidationFunction<string>;
    priceType?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PriceCreateFormOverridesProps = {
    PriceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    currencyIso?: PrimitiveOverrideProps<TextFieldProps>;
    formattedValue?: PrimitiveOverrideProps<TextFieldProps>;
    priceType?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PriceCreateFormProps = React.PropsWithChildren<{
    overrides?: PriceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PriceCreateFormInputValues) => PriceCreateFormInputValues;
    onSuccess?: (fields: PriceCreateFormInputValues) => void;
    onError?: (fields: PriceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PriceCreateFormInputValues) => PriceCreateFormInputValues;
    onValidate?: PriceCreateFormValidationValues;
} & React.CSSProperties>;
export default function PriceCreateForm(props: PriceCreateFormProps): React.ReactElement;
