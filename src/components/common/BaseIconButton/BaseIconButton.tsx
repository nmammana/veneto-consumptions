import React, { FC, MouseEventHandler } from "react";
import { IconButton } from "@material-ui/core";
import { IconC, SizeVariant } from "../../../types/types";
import { getMapValueBuilder } from "../../../utils/helpers";
import { stopPropagationWrapper } from "../../../utils/eventHandler";
import { withMemo } from "../../../utils/withMemo";

export interface BaseIconButtonProps {
  className?: string;
  iconClassName?: string;
  title?: string;
  Icon: IconC;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  size?: SizeVariant;
}

export enum IconButtonType {
  Submit = "submit",
  Reset = "reset",
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Button = "button"
}

enum IconSize {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

const BaseIconButtonInt: FC<BaseIconButtonProps> = ({
  className,
  iconClassName,
  Icon,
  onClick,
  title,
  disabled = false,
  size = SizeVariant.Medium
}) => {
  const getIconSize = (buttonSize: SizeVariant): IconSize => {
    const sizes = getMapValueBuilder({
      [SizeVariant.ExtraSmall]: IconSize.Small,
      [SizeVariant.Small]: IconSize.Small,
      [SizeVariant.Medium]: IconSize.Medium,
      [SizeVariant.Large]: IconSize.Medium
    });
    return sizes(buttonSize);
  };
  return (
    <IconButton
      className={className}
      title={title}
      onClick={stopPropagationWrapper(onClick)}
      disabled={disabled}
      type={IconButtonType.Button}
    >
      <Icon className={iconClassName} fontSize={getIconSize(size)} />
    </IconButton>
  );
};

export const BaseIconButton = withMemo(BaseIconButtonInt);
