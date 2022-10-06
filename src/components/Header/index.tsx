import { ReactNode, useCallback } from "react";
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
import * as S from "./styles";
import Cart from "../../icons/Cart";

interface Props {
  children?: ReactNode;
}

export const Header = () => {
  const HeaderContainer = useCallback(
    ({ children }: Props) => <S.Container>{children}</S.Container>,
    []
  );

  const HeaderLeft = useCallback(
    ({ children }: Props) => <Box>{children}</Box>,
    []
  );

  const HeaderRight = useCallback(
    ({ children }: Props) => (
      <Flex flex={"column"} gap={"27px"} alignItems={"center"}>
        {children}
      </Flex>
    ),
    []
  );

  return (
    <HeaderContainer>
      <HeaderLeft>
        <S.Logo>capputeeno</S.Logo>
      </HeaderLeft>
      <HeaderRight>
        <InputGroup>
          <S.SearchInput placeholder="Procurando por algo específico?" />
          {/* <InputRightElement children={<SearchIcon />} /> */}
        </InputGroup>
        <Cart />
      </HeaderRight>
    </HeaderContainer>
  );
};
