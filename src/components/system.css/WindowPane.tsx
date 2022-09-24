import React from "react";
import classNames from "classnames";

type Props = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
}>;

const WindowPane: React.FC<Props> = ({ children, ...rest }: Props) => {
  const sectionStyles = classNames("window-pane");
  return (
    <section {...rest} className={sectionStyles}>
      {children}
    </section>
  );
};

export default WindowPane;
