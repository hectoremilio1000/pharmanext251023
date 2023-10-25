/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Price } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PriceUpdateFormInputValues = {
    currencyIso?: string;
    formattedValue?: string;
    priceType?: string;
    value?: number;
};
export declare type PriceUpdateFormValidationValues = {
    currencyIso?: ValidationFunction<string>;
    formattedValue?: ValidationFunction<string>;
    priceType?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PriceUpdateFormOverridesProps = {
    PriceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    currencyIso?: PrimitiveOverrideProps<TextFieldProps>;
    formattedValue?: PrimitiveOverrideProps<TextFieldProps>;
    priceType?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PriceUpdateFormProps = React.PropsWithChildren<{
    overrides?: PriceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    price?: Price;
    onSubmit?: (fields: PriceUpdateFormInputValues) => PriceUpdateFormInputValues;
    onSuccess?: (fields: PriceUpdateFormInputValues) => void;
    onError?: (fields: PriceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PriceUpdateFormInputValues) => PriceUpdateFormInputValues;
    onValidate?: PriceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PriceUpdateForm(props: PriceUpdateFormProps): React.ReactElement;
