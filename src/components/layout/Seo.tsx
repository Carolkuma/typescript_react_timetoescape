import { withPrefix } from "gatsby";
import React, { PropsWithChildren } from "react";

const preconnect = [
  "https://connect.facebook.net",
  "https://www.facebook.com",
  "https://static.xx.fbcdn.net",
];
interface Props extends PropsWithChildren {
  title?: string;
  description?: string;
}

export const Seo = ({
  children,
  title = "Escape room - Spišská Nová Ves | Mission Imposible | timetoescape.sk",
  description = "Napínavá a zábavná úniková hra Escape Room priamo v Spiškej Novej Vsi.",
}: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#212121"></meta>
      <link rel="manifest" href={withPrefix("/manifest.json")} />
      {preconnect.map((url, key) => {
        return <link rel="preconnect" href={url} key={key}></link>;
      })}
      <link
        rel="icon"
        type="image/svg+xml"
        href={withPrefix("/favicon/favicon.svg")}
      />
      <link
        rel="icon"
        type="image/png"
        href={withPrefix("/favicon/favicon.svg")}
      />
      {children}
    </>
  );
};
