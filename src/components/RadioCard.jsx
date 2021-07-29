import { useRadio } from "@chakra-ui/radio";
import { Box } from "@chakra-ui/react";

export default function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        color="#241664"
        cursor="pointer"
        borderWidth={1}
        borderColor="#f0f0f0"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "#241664",
          color: "#f8f8ff",
          borderColor: "#241664",
        }}
        px={5}
        py={3}
        transition='0.3s'
      >
        {props.children}
      </Box>
    </Box>
  )
}