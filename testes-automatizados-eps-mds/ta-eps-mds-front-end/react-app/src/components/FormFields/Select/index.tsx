import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Select as ChakraSelect,
  InputGroup,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";
import React from "react";
import {InputProps} from "../Input";

type Option = {
  label: string;
  value: string | number;
};

export interface SelectProps extends ChakraSelectProps {
  options: Option[];
  label?: string | JSX.Element;
  errors?: FieldError | undefined;
}

export const Select = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, errors, options, defaultValue, ...rest } = props;

  return (
      <FormControl
          isInvalid={Boolean(errors)}
          width={props.width || props.w || "100%"}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup>
          <ChakraSelect variant="outline" {...rest} ref={ref}>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    selected={defaultValue === option.value}
                >
                  {option.label}
                </option>
            ))}
          </ChakraSelect>
        </InputGroup>
        <FormErrorMessage color="red.400">{errors?.message}</FormErrorMessage>
      </FormControl>
  );
});
