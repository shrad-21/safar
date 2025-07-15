// components/common/AnimatedButton.jsx
"use client";
import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${({ bg }) => bg || "#1e90ff"};
  color: ${({ color }) => color || "#fff"};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    /* background-color: ${({ hoverBg }) => hoverBg || "#0f62fe"}; */
  }

  &:active {
    transform: scale(0.97);
  }
`;

const Button = ({
  children,
  bg,
  hoverBg,
  color,
  onClick,
  type = "button",
  ...rest
}) => {
  return (
    <StyledButton
      bg={bg}
      hoverBg={hoverBg}
      color={color}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
