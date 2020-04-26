import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";

const ButtonLink = React.forwardRef(
  ({ className, href, hrefAs, children, prefetch }, ref) => (
    <Link href={href} as={hrefAs} ref={ref}>
      <a className={className}>{children}</a>
    </Link>
  )
);

// https://material-ui.com/demos/buttons/#third-party-routing-library
const RenderButton = ({
  className,
  href,
  hrefAs,
  children,
  color,
  variant
}) => (
  <Button
    component={ButtonLink}
    className={className}
    href={href}
    hrefAs={hrefAs}
    color={color}
    variant={variant}
  >
    {children}
  </Button>
);
export default RenderButton;
