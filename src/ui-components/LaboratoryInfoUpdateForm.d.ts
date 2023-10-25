/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LaboratoryInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LaboratoryInfoUpdateFormInputValues = {
    code?: string;
    message?: string;
};
export declare type LaboratoryInfoUpdateFormValidationValues = {
    code?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LaboratoryInfoUpdateFormOverridesProps = {
    LaboratoryInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LaboratoryInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: LaboratoryInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    laboratoryInfo?: LaboratoryInfo;
    onSubmit?: (fields: LaboratoryInfoUpdateFormInputValues) => LaboratoryInfoUpdateFormInputValues;
    onSuccess?: (fields: LaboratoryInfoUpdateFormInputValues) => void;
    onError?: (fields: LaboratoryInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LaboratoryInfoUpdateFormInputValues) => LaboratoryInfoUpdateFormInputValues;
    onValidate?: LaboratoryInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LaboratoryInfoUpdateForm(props: LaboratoryInfoUpdateFormProps): React.ReactElement;
