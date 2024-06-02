import me from '../app/me.jpeg';

export const name = 'Nathaniel Nemenzo';
export const avatar = me;
export const about = () => {
  return (
    <p className='prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200'>
      Hi, I'm Nathaniel! I'm a software engineer and graduate student at The University of Texas at Austin. <br/><br/>
    </p>
  );
};
export const bio = () => {
  return (
    <p className='prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200'>
      Previously, I've interned at <i>Amazon</i> inside the AFT organization building internal tools and at <i>NASA</i> doing research on blockchain-based storage for satellite observation data. Currently, I work at <i>Amazon</i>. Outside of school and work, I love drawing, tennis, and working on side projects. <br/><br/>

      This website is built using Next.js, deployed with Vercel and is based off of a template by Lee Robinson. You can find it <a href='https://github.com/leerob/leerob.io'>here.</a>
    </p>
  );
};
