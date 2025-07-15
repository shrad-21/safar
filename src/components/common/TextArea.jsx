    // components/TextAreaComponent.jsx
    "use client";
    import React from "react";
    import styled from "@emotion/styled";

    const TextAreaWrapper = styled.div`
    margin-bottom: 20px;
    `;

    const Label = styled.label`
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    `;

    const TextAreaField = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border:none;
    border-bottom: 1px solid #474343;
    font-size: 14px;
    /* transition: border-color 0.3s ease, box-shadow 0.3s ease; */
    background: transparent;
    &:focus {
        outline: none;
        border-bottom: 474343;
         box-shadow: 0 4px 0px -2px rgba(90, 58, 58, 0.3);
         transition: border-bottom 0.3s ease, box-shadow 0.3s ease;
    }

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }
     &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide number TextArea arrows in Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
    `;

    const TextArea = ({ label, placeholder, type = "text", ...rest }) => {
    return (
        <TextAreaWrapper>
        {label && <Label>{label}</Label>}
        <TextAreaField type={type} placeholder={placeholder} {...rest} />
        </TextAreaWrapper>
    );
    };

    export default TextArea;
