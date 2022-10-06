import styled from "@emotion/styled";
import { Flex, Input } from "@chakra-ui/react";

export const Container = styled(Flex)`
  background: #ffffff;
  width: 100%;
  height: 80px;
  padding-right: 10%;
  padding-left: 10%;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  color: #5d5d6d;
`;

export const SearchInput = styled(Input)`
  background: #f3f5f6;
  border-radius: 8px;
  font-family: "Saira";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #737380;
  width: 352px;
  height: 42px;
  ::placeholder {
    color: #737380;
  }
`;
