import styled from "styled-components";

export const MessageContainer = styled("div")`
  transition: 0.2s;
  cursor: pointer;
  margin: 0 60px;
  padding: 20px 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 0.5px solid #C4C4C4;
   
  &:hover {
    border-color: #E33371;
  }
   
  column-gap: 34px;
  
  .photo {
    margin-left: -30px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const ColumnsGrid = styled("div")`
  display: grid;
  grid-template-rows: auto auto;
  gap: 12px;
  
  &.content {
    font-weight: 500;
    letter-spacing: 0.04em;
    color: #000000;
    
    .contact_fio {
      font-size: 18px;
      line-height: 21px;
    }
    .text_preview {
      font-size: 16px;
      line-height: 19px;
      white-space: nowrap;
      overflow: hidden;
      width: 500px;
      text-overflow: ellipsis;
    }
  }
  
   &.info {
    margin-right: -30px;
    
    .has_new {
      background: #E33371;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      justify-self: end;
    }
  }
`;
