import styled from "styled-components";
import { CountryColors } from "@/app/map/countries";

export const StyledColorField = styled.div<{ color: CountryColors }>`
    width: 44px;
    height: 22px;
    background-color: color-mix(in srgb, ${({ color }) => color}, transparent 70%);
    border: ${({ color }) => color} 3px solid; 
`;
