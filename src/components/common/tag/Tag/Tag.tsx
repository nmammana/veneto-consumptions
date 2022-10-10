import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { Color } from "../../../../styles/model/color";
import { RadiusVariant } from "../../../../styles/model/theme";
import { TypeVariant } from "../../../../styles/model/themeVariant";
import { IconC } from "../../../../types/types";
import "./Tag.scss";

export type TagTypeVariant = TypeVariant.Contained | TypeVariant.Outlined;

export interface TagProps {
  className?: string;
  title?: string;
  text?: string;
  EndIcon?: IconC;
  color?: Color;
  radius?: RadiusVariant;
}

export const Tag: FC<TagProps> = ({
  className,
  EndIcon,
  text,
  title,
  color,
  radius = 2
}) => {
  return (
    <Tooltip title={title ?? ""}>
      <div
        className={`${className} container`}
        style={{
          border: `1px solid ${color}`,
          borderRadius: radius,
          color
        }}
      >
        <span className="text">{text}</span>
        {EndIcon && <EndIcon className="icon" />}
      </div>
    </Tooltip>
  );
};
