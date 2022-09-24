import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { Autocomplete as MuiAutocomplete } from "@material-ui/lab";
import { differenceWith, isEmpty, isEqual } from "lodash";
import { FocusEventHandler, useMemo } from "react";
import { useTextInputStyle } from "../../../styles/muiStyles";
import { IconC, notUndefined, ReactElement } from "../../../types/types";

export enum AutoCompleteTypeVariant {
  Outlined = "outlined",
  Standard = "standard",
  Filled = "filled"
}
export interface AutocompleteOptionConfig<V> {
  text: string;
  title?: string;
  value: V;
}

interface AutocompleteProps<V> {
  className?: string;
  clearText?: string;
  closeText: string;
  disabled?: boolean;
  EndIcon?: IconC;
  errorText?: string;
  fullWidth?: boolean;
  helperText?: string;
  id?: string;
  inputValue?: string;
  label?: string;
  loading?: boolean;
  loadingText: string;
  noOptionsText: string;
  onBlur?: FocusEventHandler<HTMLElement>;
  onChange?: (val?: V) => void;
  onInputChange?: (text: string, optionChanged: boolean) => void;
  openText: string;
  options: AutocompleteOptionConfig<V>[];
  showError?: boolean;
  showHelperOrErrorText?: boolean;
  value?: V;
  StartIcon?: IconC;
  compareValues?: (v1: V, v2: V) => boolean;
  variant?: AutoCompleteTypeVariant;
  getOptionFromValue?: (value: V) => AutocompleteOptionConfig<V>;
  excludedValues?: V[];
  localSearch?: boolean;
  clearable?: boolean;
  clearOnBlur?: boolean;
}

export const Autocomplete = <V,>({
  className,
  clearText = "",
  closeText,
  errorText,
  helperText,
  id,
  inputValue,
  label,
  loading,
  loadingText,
  noOptionsText,
  onBlur,
  onChange,
  onInputChange,
  openText,
  options,
  value,
  StartIcon,
  getOptionFromValue,
  excludedValues = [],
  EndIcon = KeyboardArrowDown,
  disabled = false,
  fullWidth = false,
  showError = true,
  showHelperOrErrorText = true,
  compareValues = (v1, v2) => v1 === v2,
  variant = AutoCompleteTypeVariant.Standard,
  localSearch = true,
  clearable = true,
  clearOnBlur = false
}: AutocompleteProps<V>): ReactElement => {
  const filteredOptions = useMemo(() => {
    const auxOptions =
      value !== undefined && !options.some(v => compareValues(v.value, value))
        ? [...options, getOptionFromValue?.(value)].filter(notUndefined)
        : options;

    if (!isEmpty(excludedValues)) {
      return differenceWith(auxOptions, excludedValues, (v1, v2) =>
        isEqual(v1.value, v2)
      );
    }
    return auxOptions;
  }, [excludedValues, options, compareValues, getOptionFromValue, value]);

  const hasError = showError && Boolean(errorText);
  const showableHelperText = (hasError ? errorText : helperText) || "";
  const getOptionLabel = (val: V) => {
    const option = filteredOptions.find(opt => compareValues(opt.value, val));
    return option ? option.text : getOptionFromValue?.(val).text ?? "";
  };
  const getOptionTitle = (val: V) => {
    const option = filteredOptions.find(opt => compareValues(opt.value, val));
    return option?.title ? option.title : "";
  };
  const hasEndIcon = Boolean(EndIcon);
  const inputLabelClasses = useTextInputStyle();

  return (
    <FormControl className={className} error={hasError} fullWidth={fullWidth}>
      <MuiAutocomplete
        disableClearable={!clearable}
        /* classes={autocompleteClasses} */
        clearText={clearText}
        closeText={closeText}
        disabled={disabled}
        id={id}
        inputValue={inputValue}
        getOptionLabel={getOptionLabel}
        loading={loading}
        loadingText={loadingText}
        noOptionsText={noOptionsText}
        onBlur={onBlur}
        onChange={(_, val) => {
          const option = filteredOptions.find(elem => elem.value === val);
          onChange?.(option?.value);
        }}
        onInputChange={(_event, searchText, reason) => {
          onInputChange?.(searchText, reason === "reset");
        }}
        openText={openText}
        options={filteredOptions.map(option => option.value)}
        popupIcon={<EndIcon />}
        renderInput={params => (
          <>
            <TextField
              {...params}
              placeholder={label}
              className={inputLabelClasses.textInputStyle}
              InputLabelProps={{
                ...params.InputLabelProps
              }}
              disabled={disabled}
              error={hasError}
              InputProps={{
                ...params.InputProps,
                /* classes: inputClasses, */
                ...(StartIcon && {
                  startAdornment: (
                    <InputAdornment
                      /* classes={endIconClasses} */ position="start"
                    >
                      <StartIcon />
                    </InputAdornment>
                  )
                })
              }}
              variant={variant}
              size="small"
            />
            {showHelperOrErrorText && (
              <FormHelperText
                error={hasError}
                /* className={formHelperTextClasses.root} */
                margin="dense"
              >
                {showableHelperText}
              </FormHelperText>
            )}
          </>
        )}
        renderOption={option => (
          <span
            /* className={labelTextClasses.optionLabelText} */
            title={getOptionTitle(option)}
          >
            {getOptionLabel(option)}
          </span>
        )}
        value={value ?? null}
        forcePopupIcon={hasEndIcon}
        getOptionSelected={compareValues}
        clearOnBlur={clearOnBlur}
        // this prop is needed because mui filter the possible options to select
        // doing a fuzzy search with the text input content by default
        filterOptions={
          localSearch
            ? undefined
            : (internalOptions: V[]) => {
                return internalOptions;
              }
        }
      />
    </FormControl>
  );
};
