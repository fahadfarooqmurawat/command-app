import styled from "styled-components";

type Props = {
  space: string;
};

export const VerticalSpacer = ({ space }: Props) => {
  return <Spacer space={space} />;
};

const Spacer = styled.div<{ space: string }>`
  height: ${(props) => props.space};
  width: 100%;
`;
