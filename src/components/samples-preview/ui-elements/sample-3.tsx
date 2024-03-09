import Image from "next/image";
import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";
import avatar from "@root/public/sample-3-avatar.jpg";

import { Button } from "@/components/primitives/button";
import { PencilFill } from "@/components/icons";

import { cssBgVar, cssFgVar, applyStyle } from "../utils";

const classes = {
  root: stack({
    gap: "6",
    p: "6",
    rounded: "xl",
    "& > div:first-child": { display: "flex", alignItems: "start", gap: "3" },
  }),
  content: css({ flex: 1 }),
  title: css({ textStyle: "body-lg", fontWeight: "bold" }),
  desc: css({ textStyle: "body-base", mt: "3", "& > span": { display: "block" } }),
  bottomContent: css({ display: "flex", alignItems: "center", justifyContent: "space-between" }),
  avatar: circle({ size: "8" }),
  icon: css({ fontSize: "icon-24" }),
};

export function Sample3() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div>
        <div className={classes.content}>
          <p className={classes.title} style={applyStyle("color")}>
            Discover the full stack trends for 2024! 🚀
          </p>
          <p className={classes.desc} style={applyStyle("color")}>
            Explore the benefits of leveraging React, Svelte, Angular, Vue, Node.js, Express.js, Django, Flask, ASP.NET, and Spring Boot in full stack development. Don&apos;t miss out!
            <span> #react #svelte #angular #vue #nodejs #expressjs #django #flask #aspnet #springboot</span>
          </p>
        </div>
        <PencilFill className={classes.icon} style={applyStyle("color")} />
      </div>
      <div className={classes.bottomContent}>
        <Image alt="avatar" className={classes.avatar} src={avatar} />
        <Button
          style={{
            ...applyStyle("bg", { fromVar: cssFgVar }),
            ...applyStyle("color", { fromVar: cssBgVar }),
          }}
          variant="solid"
        >
          Update
        </Button>
      </div>
    </article>
  );
}
