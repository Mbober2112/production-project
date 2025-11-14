import { FC } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  portalTo?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  children,
  portalTo = document.body,
}) => {
  return createPortal(children, portalTo);
};
