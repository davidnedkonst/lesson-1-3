import styled from "@emotion/styled";
import { theme } from "../../theme/theme";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 24px;
    padding-left: ${theme.spacing(4)};
    padding-right: ${theme.spacing(4)};
`;