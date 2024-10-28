import styled from "styled-components/native";

export const CustomText = styled.Text`
    font-size: 48px;
    font-weight: 700;
    font-style: 'Atkinson Hyperlegible';
    line-height: 59px;
    color: ${({ color }) => color || '#fff'};
`;

