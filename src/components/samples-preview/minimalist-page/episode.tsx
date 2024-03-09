import { css, cx } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { ArrowRightUpLine } from "@/components/icons";

import { applyStyle } from "../utils";

const classes = {
  root: css({ display: "flex", gap: "8", flexDirection: "column", lg: { flexDirection: "row" } }),

  imgContainer: css({
    order: -1,
    aspectRatio: "16/9",
    flex: 1,
    "& > img": { width: "100%", height: "100%", objectFit: "cover" },
    lg: { order: "initial" },
  }),

  content: css({
    display: "flex",
    flexDirection: "column",
    lg: { w: "5/12", justifyContent: "space-around", "& > div": { flex: 1 } },
  }),

  title: css({ textStyle: "display-md", fontWeight: "bold", lg: { textStyle: "display-lg" } }),

  body: css({ mt: "3", mb: "10" }),

  link: css({
    borderBottom: "1px solid",
    borderColor: "currentColor",
    pb: "1",
    display: "inline-flex",
    w: "max-content",
    alignItems: "center",
  }),

  linkIcon: css({ fontSize: "icon-20", ml: "2" }),
};

export function Episode() {
  return (
    <section className={cx(container(), classes.root)} style={applyStyle("color")}>
      <div className={classes.content}>
        <div>
          <div className={classes.title}>Most insane Ferxxo Calipsis tour to date</div>
          <p className={classes.body}>
          we did a very good tour in latin america and the united states called ferxxocalipsis!
          </p>
        </div>

       
      </div>
      <figure className={classes.imgContainer}>
      <img
          alt="background hero"
          
          height={500}
          loading="lazy"
          src="./feidtour.jpg"
          width="100%"
        />
      </figure>
    </section>
  );
}
