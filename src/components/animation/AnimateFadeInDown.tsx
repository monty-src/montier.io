import React from "react";
import classNames from "classnames";

import "animate.css";

type Props = React.PropsWithChildren<{
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

const AnimateFadeInDown: React.FC<Props> = ({
  delay,
  children,
  ...rest
}: Props) => {
  
  const sectionStyles = classNames(
    "window",
    "animate__animated",
    "animate__fadeInDown",
    {
      [`animate__delay-${delay}s`]: delay ? true : false,
    }
  );

  return (
    <section {...rest} className={sectionStyles}>
      {children}
    </section>
  );
};

export default AnimateFadeInDown;
