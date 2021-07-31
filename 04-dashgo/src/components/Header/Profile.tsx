import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Flávia Rocha</Text>
        <Text color="gray.300" fontSize="small">
          flavia@flavia.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Flávia Rocha"
        src="https://github.com/flav1s.png"
      />
    </Flex>
  );
}
