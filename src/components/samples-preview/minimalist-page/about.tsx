import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { applyStyle } from "../utils";

const classes = {
  body: css({ fontWeight: "medium", textStyle: "display-xs", lg: { textStyle: "display-md" } }),

  bodyLabel: css({
    display: "inline-block",
    w: "1/5",
    textStyle: "body-base",
    fontWeight: "normal",
    lg: {
      textStyle: "body-lg",
      w: "2/12",
    },
  }),

  links: css({
    display: "flex",
    flexDirection: "column",
    mt: "12",
    gap: "4",
    lg: { justifyContent: "space-between", flexDirection: "row" },
  }),

  linksGroup: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4",
    "& li": {
      textDecoration: "underline",
    },
    lg: { gap: "6", justifyContent: "left" },
  }),
};

export function About() {
  return (
    <section className={container()} style={applyStyle("color")}>
      <p className={classes.body}>
        <span className={classes.bodyLabel}>About</span>
        I'm Feid, Hey there, I'm Feid. I'm a singer known for blending reggaeton, trap, and Latin pop into my music. I'm all about connecting with my fans through my songs, which often touch on themes like love and personal experiences. Collaborating with other artists and experimenting with different sounds keeps my music fresh and exciting. It's a journey I'm thrilled to be on, and I'm grateful for the support of my fans every step of the way.
      </p>
      <div className={classes.links}>
        <ul className={classes.linksGroup}>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Spotify</li>
          
        </ul>
        <ul className={classes.linksGroup}>
          <li>Universal Music Latino </li>
          
        </ul>
      </div>
    </section>
  );
}
