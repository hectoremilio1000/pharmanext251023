/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Price } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PriceCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    currencyIso: "",
    formattedValue: "",
    priceType: "",
    value: "",
  };
  const [currencyIso, setCurrencyIso] = React.useState(
    initialValues.currencyIso
  );
  const [formattedValue, setFormattedValue] = React.useState(
    initialValues.formattedValue
  );
  const [priceType, setPriceType] = React.useState(initialValues.priceType);
  const [value, setValue] = React.useState(initialValues.value);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCurrencyIso(initialValues.currencyIso);
    setFormattedValue(initialValues.formattedValue);
    setPriceType(initialValues.priceType);
    setValue(initialValues.value);
    setErrors({});
  };
  const validations = {
    currencyIso: [],
    formattedValue: [],
    priceType: [],
    value: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          currencyIso,
          formattedValue,
          priceType,
          value,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Price(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PriceCreateForm")}
      {...rest}
    >
      <TextField
        label="Currency iso"
        isRequired={false}
        isReadOnly={false}
        value={currencyIso}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currencyIso: value,
              formattedValue,
              priceType,
              value,
            };
            const result = onChange(modelFields);
            value = result?.currencyIso ?? value;
          }
          if (errors.currencyIso?.hasError) {
            runValidationTasks("currencyIso", value);
          }
          setCurrencyIso(value);
        }}
        onBlur={() => runValidationTasks("currencyIso", currencyIso)}
        errorMessage={errors.currencyIso?.errorMessage}
        hasError={errors.currencyIso?.hasError}
        {...getOverrideProps(overrides, "currencyIso")}
      ></TextField>
      <TextField
        label="Formatted value"
        isRequired={false}
        isReadOnly={false}
        value={formattedValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currencyIso,
              formattedValue: value,
              priceType,
              value,
            };
            const result = onChange(modelFields);
            value = result?.formattedValue ?? value;
          }
          if (errors.formattedValue?.hasError) {
            runValidationTasks("formattedValue", value);
          }
          setFormattedValue(value);
        }}
        onBlur={() => runValidationTasks("formattedValue", formattedValue)}
        errorMessage={errors.formattedValue?.errorMessage}
        hasError={errors.formattedValue?.hasError}
        {...getOverrideProps(overrides, "formattedValue")}
      ></TextField>
      <TextField
        label="Price type"
        isRequired={false}
        isReadOnly={false}
        value={priceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currencyIso,
              formattedValue,
              priceType: value,
              value,
            };
            const result = onChange(modelFields);
            value = result?.priceType ?? value;
          }
          if (errors.priceType?.hasError) {
            runValidationTasks("priceType", value);
          }
          setPriceType(value);
        }}
        onBlur={() => runValidationTasks("priceType", priceType)}
        errorMessage={errors.priceType?.errorMessage}
        hasError={errors.priceType?.hasError}
        {...getOverrideProps(overrides, "priceType")}
      ></TextField>
      <TextField
        label="Value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              currencyIso,
              formattedValue,
              priceType,
              value: value,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
