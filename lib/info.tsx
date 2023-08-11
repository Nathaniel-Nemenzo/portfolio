import me from '../app/me.jpeg';

export const name = 'Nathaniel Nemenzo';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hi! I'm a software engineer and <s>undergraduate</s> graduate(!) student at The University of Texas at Austin. My interests include learning agents, systems, and creating cool things.  <br/><br/>
    </>
  );
};
export const bio = () => {
  return (
    <>
      Previously, I've interned at <b>Amazon</b> inside the AFT organization building AWS applications and at <b>NASA</b> doing research on blockchain-based storage for satellite observation data. I've also spent time in the Learning Agents Research Group at UT Austin during my undergrad. Currently, I'm a Software Engineer I at <b>JPMorgan Chase</b> in Houston, Texas building on <u><a href="https://www.youtube.com/watch?v=3ygPF-Qshkc">Athena</a></u>. Outside of school and work, I love drawing, watching movies, and working on side projects. <br/><br/>

      This website is built using Next.js, deployed with Vercel and is based off of a template by Lee Robinson. You can find it <b><a href='https://github.com/leerob/leerob.io'>here.</a></b>
    </>
  );
};
