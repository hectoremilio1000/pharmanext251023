/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Stock } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StockUpdateForm(props) {
  const {
    id: idProp,
    stock: stockModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isValueRounded: false,
    stockLevel: "",
    stockLevelStatus: "",
  };
  const [isValueRounded, setIsValueRounded] = React.useState(
    initialValues.isValueRounded
  );
  const [stockLevel, setStockLevel] = React.useState(initialValues.stockLevel);
  const [stockLevelStatus, setStockLevelStatus] = React.useState(
    initialValues.stockLevelStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stockRecord
      ? { ...initialValues, ...stockRecord }
      : initialValues;
    setIsValueRounded(cleanValues.isValueRounded);
    setStockLevel(cleanValues.stockLevel);
    setStockLevelStatus(cleanValues.stockLevelStatus);
    setErrors({});
  };
  const [stockRecord, setStockRecord] = React.useState(stockModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Stock, idProp)
        : stockModelProp;
      setStockRecord(record);
    };
    queryData();
  }, [idProp, stockModelProp]);
  React.useEffect(resetStateValues, [stockRecord]);
  const validations = {
    isValueRounded: [],
    stockLevel: [],
    stockLevelStatus: [],
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
          isValueRounded,
          stockLevel,
          stockLevelStatus,
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
          await DataStore.save(
            Stock.copyOf(stockRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StockUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Is value rounded"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isValueRounded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isValueRounded: value,
              stockLevel,
              stockLevelStatus,
            };
            const result = onChange(modelFields);
            value = result?.isValueRounded ?? value;
          }
          if (errors.isValueRounded?.hasError) {
            runValidationTasks("isValueRounded", value);
          }
          setIsValueRounded(value);
        }}
        onBlur={() => runValidationTasks("isValueRounded", isValueRounded)}
        errorMessage={errors.isValueRounded?.errorMessage}
        hasError={errors.isValueRounded?.hasError}
        {...getOverrideProps(overrides, "isValueRounded")}
      ></SwitchField>
      <TextField
        label="Stock level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stockLevel}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              isValueRounded,
              stockLevel: value,
              stockLevelStatus,
            };
            const result = onChange(modelFields);
            value = result?.stockLevel ?? value;
          }
          if (errors.stockLevel?.hasError) {
            runValidationTasks("stockLevel", value);
          }
          setStockLevel(value);
        }}
        onBlur={() => runValidationTasks("stockLevel", stockLevel)}
        errorMessage={errors.stockLevel?.errorMessage}
        hasError={errors.stockLevel?.hasError}
        {...getOverrideProps(overrides, "stockLevel")}
      ></TextField>
      <TextField
        label="Stock level status"
        isRequired={false}
        isReadOnly={false}
        value={stockLevelStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isValueRounded,
              stockLevel,
              stockLevelStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.stockLevelStatus ?? value;
          }
          if (errors.stockLevelStatus?.hasError) {
            runValidationTasks("stockLevelStatus", value);
          }
          setStockLevelStatus(value);
        }}
        onBlur={() => runValidationTasks("stockLevelStatus", stockLevelStatus)}
        errorMessage={errors.stockLevelStatus?.errorMessage}
        hasError={errors.stockLevelStatus?.hasError}
        {...getOverrideProps(overrides, "stockLevelStatus")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || stockModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || stockModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
