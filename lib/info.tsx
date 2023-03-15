import me from '../app/me.jpeg';

export const name = 'Nathaniel Nemenzo';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hi! I'm a software engineer and student at The University of Texas at Austin. My interests include learning agents, operating systems, and creating cool things.  <br/><br/>
    </>
  );
};
export const bio = () => {
  return (
    <>
      Previously, I've interned at Amazon and currently I'm at NASA doing research on blockchain-based storage for satellite observation data. I've also spent time in the Learning Agents Research Group at UT Austin. Outside of school and work, I'm also interested in urban environments and architecture. <br/><br/>

      This website is built using Next.js, deployed with Vercel and is based off of a template by Lee Robinson. You can find it <b><a href='https://github.com/leerob/leerob.io'>here.</a></b>
    </>
  );
};
