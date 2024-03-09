import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { Button } from "@/components/primitives/button";
import { Play } from "@/components/icons";

import { applyStyle } from "../utils";

const classes = {
  heading: css({
    textStyle: "display-lg",
    textAlign: "center",
    fontWeight: "bold",
    lg: { textStyle: "display-xl" },
  }),

  desc: css({ textStyle: "body-base", textAlign: "center", mt: "2", lg: { textStyle: "body-lg" } }),

  releasesGrid: css({
    display: "grid",
    gap: "8",
    mt: "8",
    lg: { gridTemplateColumns: "2", mt: "12" },
    xl: { gridTemplateColumns: "3" },
  }),

  releaseImg: css({ aspectRatio: "1/1", "& img": { w: "100%", h: "100%", objectFit: "cover" } }),

  releaseContent: css({
    display: "flex",
    mt: "3",
    alignItems: "center",
    gap: "3",
    "& > div": { flex: 1 },
  }),

  releaseTitle: css({ textStyle: "display-sm", fontWeight: "bold" }),

  releaseAuthors: css({ textStyle: "body-base" }),
};

const releases: ReleaseItemProps[] = [
  {
    title: "Le pido a DIOS",
    authors: "Feid & Dj Premier",
    imgSrc: "feidsixdo.jpg",
  },
  {
    title: "SI TÚ SUPIERAS",
    authors: "Feid",
    imgSrc:
      "feidInterShibuya.jpg",
  },
  {
    title: "ROMÁNTICOS DE LUNES",
    authors: "Feid",
    imgSrc:
      "feidMor.jpg",
  },
  {
    title: "ALAKRAN",
    authors: "Feid",
    imgSrc:"feidcalipsis.png"  },
  {
    title: "Ateo",
    authors: "Feid",
    imgSrc:
      "feidvolume1.jpg",
  },
  {
    title: "Otra vez",
    authors: "Feid, Alvaro Diaz",
    imgSrc:"Feidbahia.jpg"  },
];

export function Releases() {
  return (
    <section className={container()} style={applyStyle("color")}>
      <div>
        <div className={classes.heading}>RELEASES</div>
        <p className={classes.desc}>Check the latest releases of Feid right here!</p>
      </div>
      <ul className={classes.releasesGrid}>
        {releases.map((props) => (
          <li key={props.title}>
            <ReleaseItem {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
}

interface ReleaseItemProps {
  title: string;
  authors: string;
  imgSrc: string;
}

function ReleaseItem({ authors, title, imgSrc }: ReleaseItemProps) {
  return (
    <article>
      <figure className={classes.releaseImg}>
        <img alt="relase img" height={800} loading="lazy" src={imgSrc} width={800} />
      </figure>
      <div className={classes.releaseContent}>
        <Button
          isIconOnly
          aria-label="play button"
          className={css({ borderColor: "currentcolor!", color: "currentColor!" })}
        >
          <Play />
        </Button>
        <div>
          <p className={classes.releaseTitle}>{title}</p>
          <p className={classes.releaseAuthors}>{authors}</p>
        </div>
      </div>
    </article>
  );
}
