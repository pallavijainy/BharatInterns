import { Box, Image, Text, Heading, Stack,Flex } from '@chakra-ui/react';
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom';
const  Post = ({_id, title, cover, content, summary,createdAt,author }) => {
    console.log(title, cover, content, summary,"pal")
    return (
       <Box boxShadow="md" p={4} rounded="md">
      <Flex>
        <Link to={`/post/${_id}`}>
        <Box width={500} height={400} mr={4}>
          <Image src={'http://localhost:8000/' + cover} alt={title} objectFit="cover" width="100%" height="100%" />
        </Box>
        </Link>
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            {title}
          </Heading>
          <Text>
            {/* <a>{`${author.firstname} ${author.lastname}`}</a> */}
   <time>{formatISO9075(new Date(createdAt))}</time>
          </Text>
          <Text fontSize="md" color="gray.600" mb={4}>
            {summary}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {content}
          </Text>
        </Box>
      </Flex>
    </Box>

  );
};

export default Post;