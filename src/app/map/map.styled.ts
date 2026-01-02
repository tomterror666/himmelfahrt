import styled from "styled-components";
import { CountryColors } from "@/app/map/countries";

export const StyledColorField = styled.div<{ color: CountryColors }>`
    width: 44px;
    height: 22px;
    background-color: color-mix(in srgb, ${({ color }) => color}, transparent 70%);
    border: ${({ color }) => color} 3px solid; 
`;

export const StyledPopupHeadline = styled.h4`
  text-align: center;
`;

export const StyledPopupImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledPopupFooter = styled.div`
  text-align: center;
`;

export const StyledImageLessPopupFooter = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const StyledPageWrapper = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;

export const StyledPageHeader = styled.h2`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const StyledMap = styled.div`
  height: 600px;
  width: 100%;
  margin-bottom: 44px;
`;

export const StyledTable = styled.table`
  padding-bottom: 40px;
`;

export const StyledHyphen = styled.div`
  width: 22px;
  text-align: center;
`;
