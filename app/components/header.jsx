"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { signOut } from "next-auth/react";

import { FancyButton } from "./fancy-buton.jsx";

const links = [
  // { href: "/home", name: "Home" },
  // { href: "/privacy-policy", name: "Privacy Policy" },
  // { href: "/terms-of-service", name: "Terms of Service" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <Nav>
      <Links>
        {links.map((link) => {
          return (
            <S_Link
              key={link.name}
              href={link.href}
              $isSelected={pathname === link.href}
            >
              {link.name}
            </S_Link>
          );
        })}
      </Links>
      <FancyButton onClick={() => signOut()}>Logout</FancyButton>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  height: 60px;
  padding: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: var(--primary-background);

  z-index: 1;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  flex: 1;
`;

const S_Link = styled(Link)`
  padding: 8px;
  border-radius: 4px;

  background-color: ${(props) =>
    props.$isSelected
      ? "var(--primary-foreground)"
      : "var(--primary-background)"};
  color: ${(props) =>
    props.$isSelected ? "var(--primary-text)" : "var(--secondary-text)"};
`;
