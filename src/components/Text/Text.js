import React from "react";
import { CustomText } from "./Styles";

export const Text = ({ children, color }) => {
    return(
        <CustomText color={ color }>
            {children}
        </CustomText>
    )
}