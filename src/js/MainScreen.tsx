import * as React from "react";
import { TabNavigator } from "./TabNavigator";
import { TabTitles } from "./TabTitles";
import { TabProjects } from "./TabProjects";
import { TabBiography } from "./TabBiography";

const Root = "MainScreen-Root";
const Header = "MainScreen-Header";
const Bookend = "Mainscreen-Header-Bookend";
const CenteredColumn = "CenteredColumn";
const Name = "MainScreen-Header-Name";
const Tagline = "MainScreen-Header-Tagline";
const PhoneNumber = "MainScreen-Header-PhoneNumber";
const Email = "MainScreen-Header-Email";
const GitLink = "MainScreen-Header-GitLink";

export function MainScreen(): React.ReactNode {
  return (
    <div className={Root}>
      <div className={Header}>
        <img className={Bookend} src={"images/Mugshot.jpg"} title={"My ugly mug"} />
        <div className={CenteredColumn}>
          <div className={Name}>{"Jesse Dilts"}</div>
          <div className={Tagline}>{"Making games and taking names since age 8"}</div>
          <div className={PhoneNumber}>{"972-825-7437"}</div>
          <div className={Email}>
            <a href="mailto:alkrin@gmail.com">{"alkrin@gmail.com"}</a>
          </div>
          <a className={GitLink} href="https://github.com/Alkrin">
            {"My Github Account"}
          </a>
        </div>
        <img className={Bookend} src={"images/Initials.png"} title={"My initials, in runic!"} />
      </div>
      <TabNavigator
        tabs={[
          { name: "Titles", content: () => <TabTitles /> },
          { name: "Projects", content: () => <TabProjects /> },
          { name: "Biography", content: () => <TabBiography /> },
        ]}
      />
    </div>
  );
}
