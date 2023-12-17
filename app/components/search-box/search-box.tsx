import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { TextBox } from "../text-box/text-box";

type Props = {
  searchText: string;
  setSearchText: (_: string) => void;
};

export const SearchBox = forwardRef(
  function SearchBox(
    { searchText, setSearchText }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.currentTarget.value);
    };

    return (
      <Container>
        <TextBox
          type={"text"}
          value={searchText}
          placeholder={"search"}
          onChange={onChange}
          ref={ref}
        />
      </Container>
    );
  }
);

const Container = styled.div``;
