import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./Link.module.css";

interface LinkProps {
  to: string;
  id: string;
  target?: '_blank' | '_self'| '_parent' | '_top';
  disabled?: boolean;
  onClick(): void;
}

export const Link = ({
  to = "/",
  id = "id",
  target = "_blank",
  disabled = false,
  ...props
}: PropsWithChildren<LinkProps>) => {

  return (
    <div>
      dadum
    </div>
  )
}