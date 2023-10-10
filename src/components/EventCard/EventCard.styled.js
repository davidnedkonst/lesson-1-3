import styled from "@emotion/styled";
import { theme } from "../../theme/theme";

export const Event = styled.div`
    padding: ${theme.spacing(2)};
    position: relative;
    border: 2px dashed ${theme.colorBlack};
    border-radius: ${theme.spacing(1)};
`;

export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const Info = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colorPrimaryText};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;

    svg{
        display: block;
        margin-right: ${theme.spacing(2)};
        color: ${theme.colorSecondaryText};
    }
`;

const setBgColor = props => {
    switch (props.type) {
        case "free": return theme.colorGreen;
        case "paid": return theme.colorBlue;
        case "vip": return theme.colorRed;
        default: return theme.colorBlack;
    };
};

export const Chip = styled.span`
    position: absolute;
    top: ${theme.spacing(1)};
    right: ${theme.spacing(1)};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    border-radius: ${theme.spacing(1)};;
    text-transform: uppercase;
    color: ${theme.colorWhite};
    background-color: ${setBgColor};
`;