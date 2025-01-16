import * as React from "react";

const Entry = "TabContent-Entry";
const EntryHeader = "TabContent-EntryHeader";
const LeftImage = "TabContent-LeftImage";
const RightImage = "TabContent-RightImage";

export class TabBiography extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className={Entry}>
          <div className={EntryHeader}>{"Birth of a Game Maker"}</div>
          <img className={LeftImage} src="images/Commodore.jpg" />
          When I was 8, my dad bought a used Commodore 64 from a friend. He was a computer programmer back then, so the
          first thing he showed me was how to use four different commands: print, input, if-then, and goto. I wrote my
          very first game on that silly machine with those four commands. So at age 8 I was writing simple text games.
          Not much more than Choose-Your-Own-Adventure style stories, but hey, what do you expect from an 8 year old?
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"My First Handheld Games"}</div>
          <img className={RightImage} src="images/TI83.jpg" />
          Just a few years down the road I was taking a math class in junior high. We got some TI-83 graphing
          calculators, and I quickly discovered that you could make games for those too. In 6th grade I made a LORD
          clone that quickly infiltrated every calculator on campus. In 7th grade we had TI-85's, so I wrote another
          game. This one was a LORD-style game where you piloted giant robots. Once again, my game was the most popular
          one at the school.
          <br />
          <br />
          Just so you can appreciate how much work goes into writing games for a TI calculator, here are some of the
          limitations I had to work with.
          <br />
          <br />
          <ul>
            <li>Screen resolution: 16 x 8 characters</li>
            <li>Absolutely NO indentation (debugging was a nightmare)</li>
            <li>64 kb memory, of which 1/3 was required for system operation</li>
            <li>No saving of variables (I got around this by using matrices)</li>
          </ul>
          <br />
          <br />
          Considering how little I had to work with, I'm pretty proud of the games I made. The only pity is that the
          school wiped calculator memory at the end of each year, so those games are lost to the world. But hey, it was
          better than math class!
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"A Blue Ribbon"}</div>
          I graduated from high school in 3 years and moved on to college at age 17. Unfortunately, the college I picked
          didn't do any game programming beyond Tic-Tac-Toe, Mancala, and Chess, so I was on my own. Feeling a bit
          nostalgic about my old text games, I started writing an ASCII art editing tool, txPaint. You can find it under
          Projects.
          <br />
          <br />
          Another reason I was doing ASCII art is that I was having trouble wrapping my mind around the idea of alpha
          transparency (good thing I got over that). I thought I'd have better luck with text. Well, it turns out that I
          needed to know alpha transparency to implement the copy/paste functionality for txPaint, so I broke through my
          2D graphics learning block by doing ASCII art! Kind of nutty, eh?
          <br />
          <br />
          So what's this blue ribbon, you ask? Well, I got a call from my brother Beandog. He said he was entering a
          game programming contest, and one of the rules is that you could only use ASCII art! Can you say "txPaint?" I
          drove over to his apartment, and 3 hours later we had produced a game that won 1st prize in GameDev.net's 3
          Hour Game Development Challenge V! That game is Star Cowboys. You can find Star Cowboys under Projects also.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Getting Serious About Games"}</div>
          I worked as a programmer and studied Computer Science at that college for almost 3 years when I got a sign it
          was time to move on. A Professor made the comment, "I wish we could throw all computer games in a pile and
          burn them." I knew I was in the wrong place.
          <br />
          <br />I finished the semester (and aced that prejudiced teacher's class), and then transferred to a "better
          place." The University of Advancing Technology (UAT) was my new home. There I studied for the Game Programming
          degree and finished with my Bachelor's in 2009.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Making a Living of it"}</div>
          <img className={LeftImage} src="images/SGW.jpg" />
          One of the graduation requirements for UAT was the completion of an industry internship. I landed a job doing
          UI work for the Stargate Worlds MMO with Cheyenne Mountain Entertainment during my senior year and got hired
          on full-time when the internship ended. I had a hand in almost all of the 2D UI for the game before the
          project got put on the back burner.
          <br />
          <br />
          After SGW, I was hired to do the UI for Stargate: Resistance, this time using Unreal. On 10. Feb 2010, SG:R
          shipped! I finally got a shipped title with my name in the credits.
          <br />
          <br />
          Since then I've dabbled in Flash / Flex development with the free game Killer Kristmas (sadly no longer
          available).
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Going Console"}</div>
          <img className={RightImage} src="images/WarriorsLair.jpg" />
          After my stint in web development, I was hired on by Idol Minds (now Deck Nine) to make a PS3 and PS Vita
          game. That was the social action RPG called Warrior's Lair.
          <br />
          <br />
          While at Idol Minds, I created an entire custom visual scripting system that was used for all level and
          cutscene scripting on the project.
          <br />
          <br />
          Unfortunately, funding was cut for the project in early 2012, and so I found myself looking for work again.
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Move to Mobile"}</div>
          <img className={LeftImage} src="images//WordsWithFriends.jpg" />
          I made a double move for my next job, from Colorado to California, and from console to mobile. The company was
          TinyCo, and my project was Tiny Monsters. At TinyCo I helped improve the parallax support for their custom
          cross-platform game engine, Griffin, and of course built plenty of UI. At least, until TinyCo over-extended
          itself and had to lay off about half of their staff, including me.
          <br />
          <br />
          That very night, I went home and applied to around fifty different jobs. At about 9pm, a recruiter from Zynga
          called me, and two weeks later I was working on Words With Friends as an iOS engineer. I worked on Words With
          Friends for eight and a half years, through two major re-releases, as the UI specialist for the team. You
          might be surprised how much new code goes into a 10+ year old game!
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Lunch Matters"}</div>
          <img className={LeftImage} src="images/ZyngaLunch.png" />
          Like so many others, the Covid Pandemic that started in 2020 sent me into the ranks of Work-From-Home
          employees. Zynga had a huge office space that they were no longer using, and they eventually decided to sell
          it and move elsewhere to cut costs.
          <br />
          <br />
          The saddest part of that decision is that it meant no more Zynga lunches! The Zynga building had a FULL
          kitchen and culinary staff and served incredible meals to its 1000+ employees on a daily basis. I admit that
          was my favorite part of working for them. The loss of the lunch, plus a bit of burnout after so long on a
          single project, sent me to my next job!
        </div>
        <div className={Entry}>
          <div className={EntryHeader}>{"Norse Gods and Holy Grails"}</div>
          <img className={RightImage} src="images/FinalStandRagnarok.jpg" />
          CityState Entertainment (later Unchained Entertainment) hired me on with the specific mandate to do a full
          architected rewrite of the UI system for their two game projects: a team battler and an MMO. I built large
          portions of the UI for both games, and even got to do some Voice Acting work as the Norse god Loki!
          <br />
          <br />
          The battler shipped to Steam Early Access as Final Stand: Ragnarök in 2021. After 2024 it was declared a
          financial dud, and Unchained Entertainment laid off a big chunk of their staff, including me. As such, I am
          now on the hunt for my next game industry job!
        </div>
      </>
    );
  }
}
