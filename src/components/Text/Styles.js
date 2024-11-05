import styled from 'styled-components';
import { theme } from '../../standart';

export const CustomText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.white};
    font-family:  'AtkinsonHyperlegible_700Bold';
    font-size: ${({ theme}) => theme.metrics.px(50)}px;
    line-height: ${({ theme}) => theme.metrics.px(59)}px;
    letter-spacing: ${({ theme}) => theme.metrics.px(2)}px;
    top: ${({ theme}) => theme.metrics.px(-338)}px;
    left: ${({ theme}) => theme.metrics.px(-45)}px;
`;

