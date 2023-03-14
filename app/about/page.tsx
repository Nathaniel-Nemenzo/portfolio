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
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi everyone, I'm Nathaniel. 
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
       <p>
        I'm currently a senior at The University of Texas at Austin, where I study computer science. I'm passionate about learning and building software that <b>brings good to people's lives</b>. 
       </p> 
       <hr/>
       <p>
        Outside of school, work, and coding, I love spending time with friends and family. I also enjoy going on walks with my girlfriend and playing the piano. Recently, I've taken an interest in walkable environments and architecture. <br/><br/>
        I love reading, but I find it hard to find books that I <i>want</i> to read. If you happen to come across this page, please send me recommendations of books to read! Also, I love listening to music. I listen to almost anything (sorry country music) and I'd also love music recommendations.
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
