import { Box, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

function Contents() {
  return (
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
        13 days ago
      </Box>
      <Heading size="md" my="2">
        <LinkOverlay href="#">
          New Year, New Beginnings: Smashing Workshops & Audits
        </LinkOverlay>
      </Heading>
      <Text mb="3">
        Catch up on what’s been cookin’ at Smashing and explore some of the most
        popular community resources.
      </Text>
      <Box as="a" color="teal.400" href="#inner-link" fontWeight="bold">
        Some inner link
      </Box>
    </LinkBox>
  );
}

export default Contents;
