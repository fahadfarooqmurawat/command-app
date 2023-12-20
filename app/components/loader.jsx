"use client";

import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { appStore } from "../stores/app.store.js";

export const Loader = () => {
  const isProcessing = appStore((state) => state.isProcessing);

  if (!isProcessing) return null;

  return (
    <Container>
      <ClipLoader
        color="#0a6c74"
        size={50}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
