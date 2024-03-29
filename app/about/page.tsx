import type { Metadata } from 'next';
import {
  GitHubIcon,
  ArrowIcon,
  SpotifyIcon,
  LinkedInIcon
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'Student at the University of Texas at Austin'
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
       <p>
        I'm currently a master's student at The University of Texas at Austin, where I study computer science through their <a href="https://www.cs.utexas.edu/graduate-program/masters-program/msonline">online master's program</a>. I got my undergraduate degree in computer science from the same university, hook 'em! I'm passionate about building software that <b>is cool</b> and <b>provides for ample learning opportunity</b>, which are not mutually exclusive. <br/><br/>

        As of right now, my interests lie in operating systems and high performance computing, but these tend to change a lot, which I don't think is a bad thing!
       </p> 
       <hr/>
       <p>
        When relaxing, I love spending time with friends and family. I also enjoy spending time with my girlfriend and playing the piano. I've always been interested in drawing and art, but I find it hard to actually practice and commit to getting good at it. But after watching <a href="https://en.wikipedia.org/wiki/Spider-Man:_Across_the_Spider-Verse">this</a>, I once again am motivated to continue my studies in drawing. <br/><br/>
        I love reading, but I find it hard to find books that I <i>want</i> to read (currently, I've been binging the <a href='https://en.wikipedia.org/wiki/Jujutsu_Kaisen'>JJK manga</a>). Also, I love listening to music. I listen to almost anything (sorry country music).
       </p>
       <div className="flex flex-col gap-2 md:flex-row md:gap-2">
       <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Nathaniel-Nemenzo"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/nnemenzo"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/12176234409?si=efdaf32d512e4e46"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <SpotifyIcon />
              <div className="ml-3">Spotify</div>
            </div>
            <ArrowIcon />
          </a>
          </div>
      </div>
    </section>
  );
}
