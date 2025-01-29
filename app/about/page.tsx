import type { Metadata } from 'next';
import {
  GitHubIcon,
  ArrowIcon,
  SpotifyIcon,
  LinkedInIcon
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Engineer and Graduate Student'
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
       <p>
        I currently work at Amazon, where I am a software engineer. In addition, I'm a computer science master's student at The University of Texas at Austin. I got my undergraduate degree in computer science from the same university (hook 'em). I would consider myself a serial hobbyist. My current hobbies are: running and cooking. <br/>
       </p> 
       <hr/>
       <p>
        Outside of work, school, programming, etc., I enjoy spending time with those that I love. Time goes too fast and it is our duty to slow it down a bit and do the things that we would regret not doing. Therefore, I'm trying to spend more time away from the screen and more time exploring my interests and the world around me.  
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
