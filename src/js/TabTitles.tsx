import * as React from "react";

const Entry = "TabContent-Entry";
const EntryHeader = "TabContent-EntryHeader";
const LeftImage = "TabContent-LeftImage";
const RightImage = "TabContent-RightImage";

export class TabTitles extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className={Entry}>
          <div className={EntryHeader}>{"Camelot Unchained"}</div>
          <img className={LeftImage} src="images/CamelotUnchained.png" />
          In Development.
          <br />
          <a href={"https://www.camelotunchained.com/"} target="_blank" rel="noopener noreferrer">
            {"Official Homepage"}
          </a>
          <br />
          <br />
          Camelot Unchained is a PVP MMO with a focus on Realm-vs-Realm combat. It is currently under development, with
          backer access available through the game's web page.
          <br />
          <br />I was brought on to the team with a specific mandate to rearchitect the UI system after several of the
          original authors left the team. I dug through and documented all existing UI, built a shared framework to
          standardize navigation flows and user interactions, set the coding standards for the team, and helped rewrite
          the entire UI for maintainability and reusability, with an eye toward eventual modding support.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>Final Stand: Ragnarök</div>
          <img className={LeftImage} src="images/FinalStandRagnarok.jpg" />
          Released 28. Oct 2021!
          <br />
          <a
            href={"https://store.steampowered.com/app/1605600/Final_Stand_Ragnark/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Available on Steam"}
          </a>
          <br />
          <br />
          Final Stand: Ragnarök is a Norse-themed 3d team tower defense game for PC. Built on the proprietary Unchained
          Engine, a single match can support over a thousand simultaneous enemies!
          <br />
          <br />
          This game shares the rearchitected UI infrastructure that I built for Camelot Unchained.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Word With Friends"}</div>
          <p>
            <img className={LeftImage} src="images/WordsWithFriends.jpg" />
            <a
              href={"https://apps.apple.com/us/app/words-with-friends-word-game/id1196764367"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Available on Apple Store"}
            </a>
            <br />
            <br />
            Words With Friends is one of the longest-lived mobile games ever, a full decade in and still going strong.
            You might be surprised at how much brand new code goes into such an old game!
            <br />
            <br />I was on the Words team for 8.5 years, through two major rewrites and re-releases. As the team UI
            specialist, I wrote the 'Home' architecture that managed all of our custom scene transitions.
          </p>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Tiny Monsters"}</div>
          <img className={LeftImage} src="images/TinyCo.jpg" />
          <a href={"https://apps.apple.com/us/app/tiny-monsters/id472073867"} target="_blank" rel="noopener noreferrer">
            {"Available on Apple Store"}
          </a>
          <br />
          <br />
          Tiny Monsters is a mobile game for iOS and Android devices. It runs on TinyCo's cross-platform game engine,
          Griffin.
          <br />
          <br />I created the shared build script that is now used for all of TinyCo's new Griffin games.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Warrior's Lair"}</div>
          <img className={LeftImage} src="images/WarriorsLair.jpg" />
          Cancelled.
          <br />
          <br />
          Warrior's Lair was a social action RPG for the PS Vita and PS3. You had a lair that you expanded and decorated
          with the spoils of your victories and remains of your enemies.
          <br />
          <br />
          I created the custom visual scripting system used for all level and cutscene scripting.
          <br />
          <br />
          During most of development, the game was called Ruin, so you will find a good deal of media searching under
          that name.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Killer Kristmas"}</div>
          <img className={LeftImage} src="images/KillerKristmas.jpg" />
          Released 1. Dec 2010
          <br />
          <br />
          Killer Kristmas was a free Flash game where you save Christmas by killing zombie elves. It was commissioned by
          the web development studio Mudbrick Creative as their yearly "silly" project.
          <br />
          <br />
          Killer Kristmas was programmed entirely by me over the course of a month, and was my first complete Flex
          application. Unfortunately, Mudbrick is no longer hosting it. Probably because they're no longer in business.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Stargate: Resistance"}</div>
          <img className={LeftImage} src="images/SGR.jpg" />
          Released 20. Feb 2010.
          <br />
          <br />
          Stargate: Resistance was a class-based team shooter based on the Stargate IP. Programmed using the Unreal
          Engine. Unfortunately, due to corporate politics and the resultant lack of funding, the SG:R servers shut down
          after only a single year.
          <br />
          <br />
          As an interface programmer, I was responsible for 90% of the shipped UI and the UnrealScript that powered it,
          in addition to the usual miscellany.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Stargate Worlds"}</div>
          <img className={LeftImage} src="images/SGW.jpg" />
          Cancelled.
          <br />
          <br />
          Stargate Worlds was an MMO based on the Stargate IP. Some of the technologies involved included Unreal 3, Big
          World, and CEGUI. Unfortunately, it never made it to market. The project was back-burnered in favor of the
          quicker-to-market game Stargate: Resistance. Unfortunately, corporate politics and shortage of funding
          resulted in the eventual cancellation of the project, even though it had been in beta.
          <br />
          <br />
          As a UI Programmer, I had a hand in almost every piece of the 2D UI, and was responsible for the entire
          custom, moddable UI and scripting system.
        </div>
      </>
    );
  }
}
