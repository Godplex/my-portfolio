import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const StyledMenuItem = styled(Button)<ButtonProps>(() => ({
    backgroundColor: 'transparent',
    borderRadius:'0px!important',
}));