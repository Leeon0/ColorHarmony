import { GithubFill, Brand } from "@/components/icons";

import classes from "./navbar.styled";

export function Navbar() {
  return (
    
    <nav className={classes.nav} >
      <div className={classes.logo}>
        <Brand className={`${classes.icon} ${classes.logoIcon}`} />
        Color Harmony
      </div>
      <div className={classes.rightContent}>
       
        <a
          aria-label="star on github"
          className={classes.link}
          href="https://github.com/Leeon0"
          rel="noopener"
          target="_blank"
          
        >
          <GithubFill className={`${classes.leftIcon} ${classes.icon}`} />
          <span className={classes.btnLabel}>Github</span>
        </a>
      </div>
    </nav>
  );
}
