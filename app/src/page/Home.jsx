import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import axios from "axios";
import { CopyIcon } from "@chakra-ui/icons";
export default function Home() {
  const [url, setUrl] = useState();
  const [sort, setSort] = useState("");
  const ref = useRef();
  const handlePost = () => {
    const data = {
      link: url,
    };
    axios
      .post("https://b251.herokuapp.com/", data)
      .then((res) => {
        setSort(res.data.sortlink);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function copy(e) {
    // let copyText = ref.current.value;
    // console.log(ref.current.value);
    ref.current.select();
    document.execCommand("copy");
    // copyText.select();
    // document.execCommand("copy");
  }

  return (
    <Flex justify="space-between">
      <Box bg="#fff" w="450px" p="4" borderRadius="8">
        <FormLabel>Enter a long URL to make a SortURl</FormLabel>
        <Input
          p="6"
          placeholder={"google.com"}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <br />

        <InputGroup size="sm">
          <Input p="6" value={sort} ref={ref} onChange={(e) => {}} />
          <InputRightAddon
            p="6"
            children={<CopyIcon onClick={(e) => copy(e)} />}
          />
        </InputGroup>
        <br />
        <br />
        <Button w="100%" p="8" colorScheme={"green"} onClick={handlePost}>
          Make SortURL!
        </Button>
      </Box>
      <Flex gap="14" w="50%" mt="65" fontWeight="bolder">
        <Text fontSize="4xl" color="#fff" fontFamily="Tahoma">
          SORT
        </Text>
        <Text fontSize="6xl" mt="14" color="#fff" fontFamily="cursive">
          URL
        </Text>
        <Text mt="40" fontSize="4xl" color="#fff" fontFamily="Tahoma">
          ONE CLICK
        </Text>
      </Flex>
    </Flex>
  );
}
