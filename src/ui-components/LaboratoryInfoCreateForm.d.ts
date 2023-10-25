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
export declare type LaboratoryInfoCreateFormInputValues = {
    code?: string;
    message?: string;
};
export declare type LaboratoryInfoCreateFormValidationValues = {
    code?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LaboratoryInfoCreateFormOverridesProps = {
    LaboratoryInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LaboratoryInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: LaboratoryInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LaboratoryInfoCreateFormInputValues) => LaboratoryInfoCreateFormInputValues;
    onSuccess?: (fields: LaboratoryInfoCreateFormInputValues) => void;
    onError?: (fields: LaboratoryInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LaboratoryInfoCreateFormInputValues) => LaboratoryInfoCreateFormInputValues;
    onValidate?: LaboratoryInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function LaboratoryInfoCreateForm(props: LaboratoryInfoCreateFormProps): React.ReactElement;
