import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";


type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>,keyof LinkProps>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
	
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const id = e.currentTarget.href.replace(/.*\#/, "");
    const el = document.getElementById(id);
    window.scrollTo({
      top: el?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollLink;