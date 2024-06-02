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
        I'm currently a master's student at The University of Texas at Austin, where I study computer science. I got my undergraduate degree in computer science from the same university. I'm passionate about building software that <b>is reasonably complex</b> and <b>provides learning opportuniy</b>; extra points if said software has an impact on the world. <br/>
       </p> 
       <hr/>
       <p>
        When relaxing, I love spending time with friends and family. I also enjoy spending time with my girlfriend and playing the piano. I've always been interested in drawing and art, but I find it hard to actually practice and commit to getting good at it. However, I once again am motivated to continue my studies in drawing. <br/><br/>
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
