"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { LogoutButton } from "./logout-button";

const links = [
  { href: "/home", name: "Home" },
  { href: "/privacy-policy", name: "Privacy Policy" },
  { href: "/terms-of-service", name: "Terms of Service" },
  { href: "/account", name: "Account" },
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
              isSelected={pathname === link.href}
            >
              {link.name}
            </S_Link>
          );
        })}
      </Links>
        <LogoutButton />
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  padding: 0 40px 0 250px;
  background-color: var(--primary-background);
  display: flex;
  gap: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
`;

const Links = styled.div`
  display: flex;
  font-size: 14px;
`;

const S_Link = styled(Link)`
  background-color: ${(props) => (props.isSelected ? "var(--primary-foreground)" : "var(--primary-background)")};
  color: ${(props) => (props.isSelected ? "var(--primary-text)" : "var(--secondary-text)")};
  padding: 8px;
  border-radius: 4px;
`;
