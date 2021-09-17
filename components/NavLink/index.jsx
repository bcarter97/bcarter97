import Link from "next/link";
import { useRouter } from "next/router";
import { pathToRegexp } from "path-to-regexp";
import { Children, cloneElement } from "react";

export default function NavLink({
  href,
  as,
  exact,
  activeClassName = "active",
  children,
  ...props
}) {
  const { asPath } = useRouter();
  const isActive = pathToRegexp(as || href, [], {
    sensitive: true,
    end: !!exact,
  }).test(asPath);

  const child = Children.only(children);
  const className = (
    (child.props.className || "") +
    " " +
    (isActive ? activeClassName : "")
  ).trim();

  return (
    <Link href={href} as={as} {...props}>
      {cloneElement(child, { className })}
    </Link>
  );
}
