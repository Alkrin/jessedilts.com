import * as React from "react";

const Entry = "TabContent-Entry";
const EntryHeader = "TabContent-EntryHeader";
const LeftImage = "TabContent-LeftImage";
const RightImage = "TabContent-RightImage";
const ColorGrid = "TabContent-ColorGrid";
const ColorTile = "TabContent-ColorTile";

export class TabProjects extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className={Entry}>
          <div className={EntryHeader}>{"The Emporium"}</div>
          <img className={LeftImage} src="images/Emporium.png" />
          One of my hobbies is Dungeons and Dragons (and other TTRPGs). In one of my game groups, I decided that I
          wanted to be the person who RUNS the adventurer's guild. The challenge being that an adventurer's guild has a
          LOT of employees, and keeping track of them all was a nightmare.
          <br />
          <br />I tried using an Excel spreadsheet, but at around 30 employees it got too clunky, so I started building
          a website to do all of the bookkeeping for me. That includes things like character sheets, maps, armies, and
          keeping track of who is in which dungeon. I even wrote code to manage payroll, contracts, and structures!
          <br />
          <br />
          I'm now using this website to manage over 100 characters!
          <br />
          <br />
          <a href="https://emporium-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">
            {"Try It Here!"}
          </a>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Just Another Prophecy"}</div>
          <img className={LeftImage} src="images/JustAnotherProphecy.png" />
          Just Another Prophecy is a 15 minute demo built in RPG Maker. I wrote an entire notebook full of game story
          and design as a teenager, and I used this project as a chance to make some small part of my imagination come
          to life.
          <br />
          <br />
          <a href="downloads/JustAnotherProphecy.zip">Download it here!</a>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"CrashProofer"}</div>
          <img className={LeftImage} src="images/BSOD.jpg" />
          Did you know that World of Warcraft addons only save their data if you quit normally? If WoW crashes, you have
          a power outage, or anything of that sort, any data from your latest play session is lost!
          <br />
          <br />
          CrashProofer helps protect your addon data by backing it up to your other guild members who also use
          CrashProofer. That way when you log back in, they can send you back the data you would otherwise have lost!
          <br />
          <br />
          <a href="https://github.com/Alkrin/CrashProofer" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"FactionGrinder"}</div>
          <img className={LeftImage} src="images/FG2.jpg" />
          Faction Grinder was the first full-featured reputation mod for World of Warcraft. It tells you everything you
          need to know to quest your way to exalted with all the factions: who, what, where, how much, and how long.
          <br />
          <br />
          Faction Grinder was featured on WoWInterface.com for awesomeness and usefulness. All told, it has been
          downloaded over 50,000 times.
          <br />
          <br />
          <a href="https://github.com/Alkrin/FactionGrinderClassic" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Star Cowboys"}</div>
          <img className={LeftImage} src="images/StarCowboys.jpg" />
          Star Cowboys is a simple text-based game where you power your ship by pushing stars into black holes.
          <br />
          <br />
          Star Cowboys was written for GameDev.net's 3 Hour Game Development Contest V, and it won first place! The code
          for this game is the property of BeanDog. My contribution was txPaint, the tool we used to do all of the
          "graphics." txPaint is also in the Projects list.
          <br />
          <br />
          <a href="downloads/StarCowboys.zip">Download Star Cowboys</a>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"txPaint"}</div>
          <img className={LeftImage} src="images/txPaint.jpg" />
          txPaint is a tool for editing ASCII art. It shares a lot of the familiar tools and options that the average
          user will remember from MS Paint.
          <br />
          <br />
          ASCII image files created with this tool are saved with the ".txp" extension (Text Picture). The format of
          these files is described below.
          <br />
          <br />
          Image Width - 32 bit int
          <br />
          Image Height - 32 bit int
          <br />
          <br />
          The rest of the file is a set of "txChars," going from top left to bottom right of the image. txChars have the
          following format.
          <br />
          <br />
          Foreground Color - 4 bit int
          <br />
          Character - 8 bit char
          <br />
          Background Color - 4 bit int
          <br />
          <br />
          The "zero" character (\\0) is used for transparency. The background and foreground colors are the old numbers
          used for console graphics back when you couldn't get more than 16 colors.
          <br />
          <br />
          <div className={ColorGrid}>
            <div className={ColorTile} style={{ backgroundColor: "#000000" }}>
              0
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#000080" }}>
              1
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#008000" }}>
              2
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#008080" }}>
              3
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#800000" }}>
              4
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#800080" }}>
              5
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#808000" }}>
              6
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#c0c0c0" }}>
              7
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#808080" }}>
              8
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#0000ff" }}>
              9
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#00ff00" }}>
              10
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#00ffff" }}>
              11
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#ff0000" }}>
              12
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#ff00ff" }}>
              13
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#ffff00" }}>
              14
            </div>
            <div className={ColorTile} style={{ backgroundColor: "#ffffff" }}>
              15
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <a href="downloads/txPaint.zip">Download txPaint!</a>
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Tiers"}</div>
          <img className={LeftImage} src="images/Tiers.jpg" />
          Tiers is a turn-based strategy game. It uses the familiar "Build A Base, Build An Army, Blow Up The Enemy"
          paradigm that most RTS players are familiar with.
          <br />
          <br />
          Tiers got its start as a board game, back when I was living in Estonia and didn't have access to a PC. The
          book keeping involved made it clear, though, that computerization was the way to go.
          <br />
          <br />
          Here's a download link for my latest build. The code is included.
          <br />
          <br />
          <a href="downloads/Tiers.zip">Download Tiers!</a>
          <br />
          <br />
          Tiers is written in DarkBASIC (built on C++). As I discovered partway into the project, DarkBASIC is a very
          flawed tool. It has almost no object orientation, doesn't perform mathematical order of operations properly,
          and it won't even let you pass an array element to a function. To make things uglier, you cannot pass anything
          by reference, so you have to resort to ugly global variables to make things work. In spite of these and other
          limitations, I've persevered to create a full game from scratch.
          <br />
          <br />
          Some Stats:
          <br />
          <ul>
            <li>20,000 lines of code</li>
            <li>40 mb unzipped</li>
          </ul>
        </div>
      </>
    );
  }
}
