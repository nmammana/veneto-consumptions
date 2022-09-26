import React, { useMemo } from "react";
import { ButtonBase, FormControl, FormHelperText } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { differenceWith, isEmpty, isEqual } from "lodash-es";
import {
  bindPopover,
  bindTrigger,
  usePopupState
} from "material-ui-popup-state/hooks";
import {
  IconC,
  Optional,
  ReactElement,
  TypeVariant
} from "../../../types/types";
import { BaseIconButton } from "../BaseIconButton/BaseIconButton";
import { Menu, MenuItemConfig } from "../Menu/Menu";
import { SizeVariant, StyleVariant } from "../../../styles/model/themeVariant";
import { CloseIcon } from "../../icons";
import { withMemo } from "../../../utils/withMemo";

import { useClientRect } from "../../../utils/useClientRect";
import { useMuiTheme } from "../../../styles/model/useMuiTheme";

export type OptionsConfig<V> = MenuItemConfig<V>;

export type SelectInputTypeVariant =
  | TypeVariant.Outlined
  | TypeVariant.Contained;

export interface SelectInputProps<V> {
  className?: string;
  disabled?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  helperText?: string;
  id?: string;
  noOptionsText?: string;
  onBlur?: () => void;
  onChange?: (value?: V) => void;
  options: OptionsConfig<V>[];
  placeholder?: string;
  popupId?: string;
  showError?: boolean;
  showHelperOrErrorText?: boolean;
  StartIcon?: IconC;
  type?: SelectInputTypeVariant;
  value?: V;
  compareValues?: (val1: V, val2: V) => boolean;
  clearValue?: V;
  clearable?: boolean;
  clearText?: string;
  openText?: string;
  closeText?: string;
  excludedValues?: V[];
  getOptionFromValue?: (value: V) => OptionsConfig<V>;
}

const SelectInputInt = <V,>({
  /*  className, */
  errorText,
  helperText,
  id,
  noOptionsText,
  onBlur,
  onChange,
  placeholder,
  StartIcon,
  value,
  clearValue,
  openText,
  closeText,
  clearText,
  getOptionFromValue,
  clearable = false,
  compareValues = (v1: V, v2: V) => v1 === v2,
  disabled = false,
  /* fullWidth = false, */
  options = [],
  popupId = "selectInput",
  showError = true,
  showHelperOrErrorText = true,
  /* type = TypeVariant.Outlined, */
  excludedValues = []
}: SelectInputProps<V>): ReactElement => {
  const [buttonRect, buttonRef] = useClientRect<HTMLButtonElement>();
  const buttonSize = buttonRect ? buttonRect.width : 0;
  const popupState = usePopupState({
    variant: "popover",
    popupId
  });
  const hasError = showError && Boolean(errorText);
  /* const hasValue = Boolean(value); */
  const showableHelperText = (hasError ? errorText : helperText) || "";
  const { isOpen } = popupState;
  const handleChange = (val: V) => {
    const option = options.find(elem => compareValues(elem.value, val));
    if (option !== undefined) {
      onChange?.(option.value);
    }
  };
  const getOptionText = (val: V): Optional<string> => {
    const option = options.find(elem => compareValues(elem.value, val));
    return option?.text ?? getOptionFromValue?.(val).text;
  };
  const textToShow = value ? getOptionText(value) : placeholder;
  /* const selectInputClassesProps = {
    disabled,
    fullWidth,
    hasError,
    isOpen,
    type,
    clearable,
    hasValue
  }; */
  /* const formControlClasses = useFormControlStyleClasses(
    selectInputClassesProps
  );
  const selectInputClasses = useSelectInputStyleClasses(
    selectInputClassesProps
  );
  const menuClasses = useMenuStyle(); */
  /* const formHelperTextClasses = useFormHelperTextStyle(); */
  const theme = useMuiTheme(StyleVariant.Primary);
  const { onClose: bindOnClose, ...bindProps } = bindPopover(popupState);

  const filteredOptions = useMemo(() => {
    if (!isEmpty(excludedValues)) {
      return differenceWith(options, excludedValues, (v1, v2) =>
        isEqual(v1.value, v2)
      );
    }
    return options;
  }, [excludedValues, options]);

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        /* className={getClassName(className, formControlClasses.root)} */
        disabled={disabled}
        error={hasError}
        id={id}
        variant="outlined"
      >
        <ButtonBase
          {...bindTrigger(popupState)}
          /* className={selectInputClasses.container} */
          disabled={disabled}
          ref={buttonRef}
          title={isOpen ? closeText : openText}
        >
          {StartIcon && (
            <StartIcon /* className={selectInputClasses.startIcon} */ />
          )}
          <span title={textToShow} /* className={selectInputClasses.text} */>
            {textToShow}
          </span>
          {isOpen ? (
            <ExpandLess /* className={selectInputClasses.endIcon} */ />
          ) : (
            <ExpandMore /* className={selectInputClasses.endIcon} */ />
          )}
        </ButtonBase>
        {clearable && !disabled && value !== clearValue && (
          <BaseIconButton
            /*  className={selectInputClasses.clearButton} */
            title={clearText}
            Icon={CloseIcon}
            onClick={() => onChange?.(clearValue)}
            size={SizeVariant.Small}
          />
        )}
        <Menu
          /* className={menuClasses.menu} */
          menuItems={filteredOptions}
          noOptionsText={noOptionsText}
          onOptionSelected={handleChange}
          selectedItem={value}
          width={buttonSize}
          {...bindProps}
          onClose={() => {
            onBlur?.();
            bindOnClose();
          }}
        />
        {showHelperOrErrorText && (
          <FormHelperText /* classes={formHelperTextClasses} */ margin="dense">
            {showableHelperText}
          </FormHelperText>
        )}
      </FormControl>
    </ThemeProvider>
  );
};

export const SelectInput = withMemo(SelectInputInt) as typeof SelectInputInt;
