import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import InputMask from "react-input-mask";
import React from "react";

export interface InputProps extends ChakraInputProps {
  infoText?: string | JSX.Element;
  label?: string | JSX.Element;
  errors?: FieldError | undefined;
  mask?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, errors, mask, infoText, ...rest } = props;

  return (
    <FormControl
      isInvalid={Boolean(errors)}
      width={props.width || props.w || "100%"}
    >
      {label && (
        <FormLabel>
          {label}{" "}
          {infoText && (
            <Tooltip
              label={infoText}
              hasArrow
              background="blackAlpha.900"
              closeDelay={500}
            >
              <InfoIcon />
            </Tooltip>
          )}
        </FormLabel>
      )}
      <InputGroup>
        {mask ? (
          <ChakraInput
            variant="outline"
            {...rest}
            ref={ref}
            mask={mask}
            as={InputMask}
          />
        ) : (
          <ChakraInput
            autoComplete="off"
            variant="outline"
            {...rest}
            ref={ref}
          />
        )}
      </InputGroup>
      <FormErrorMessage color="red.400">{errors?.message}</FormErrorMessage>
    </FormControl>
  );
});
