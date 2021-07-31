import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Flávia Rocha</Text>
          <Text color="gray.300" fontSize="small">
            flavia@flavia.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Flávia Rocha"
        src="https://github.com/flav1s.png"
      />
    </Flex>
  );
}
