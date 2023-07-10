import { Box, Image, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
const Post = ({ _id, title, cover, content, summery, createdAt, author }) => {
  console.log(title, cover, content, summery, "pal");
  return (
    <Link to={`/post/${_id}`}>
      <Box
        m={"auto"}
        width={"90%"}
        height={"10%"}
        shadow={"base"}
        textAlign={"left"}
        mt={20}
        rounded="md"
      >
        <Flex>
          <Link to={`/post/${_id}`}>
            <Box width={500} mr={4}>
              <Image
                src={"http://localhost:8000/" + cover}
                alt={title}
                objectFit="cover"
                width="100%"
                height="50%"
              />
            </Box>
          </Link>

          <Box>
            <Heading mt={5} textAlign={"left"} as="h2" size="lg" mb={2}>
              {title}
            </Heading>
            <Text
              fontSize={"sm"}
              fontWeight={"medium"}
              color={"blackAlpha.700"}
            >
              {`${author.firstname} `}
              <time style={{ color: "#A9A9A9", fontSize: "12px" }}>
                {formatISO9075(new Date(createdAt))}
              </time>
            </Text>
            <Text
              mt={5}
              fontSize="lg"
              fontWeight={"medium"}
              color={"blackAlpha.700"}
              pr={10}
            >
              {summery}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default Post;
