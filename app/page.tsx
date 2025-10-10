import Banner from '../Comps/Banner'; import Round from '@/Comps/Round';
import EditorPick from '@/Comps/Editor-pick'; import HomePage from '@/Comps/posts'
import Tech from '@/Comps/Tech-review'; import Lady from '@/Comps/Techwire';
import MustRead from '@/Comps/Must'; import Technology from '@/Comps/Techno';
import Gadget from '@/Comps/Gadg'; import Earn from '@/Comps/Earn';
import Games from '@/Comps/Games'; import Apps from '@/Comps/Apps';
import News from '@/Comps/News'

const Home = () => {
  return (
     <main>
       <Round />
       <Banner />
       <HomePage />
       <EditorPick />
        <Tech />
        <Lady />
        <MustRead />
        <Technology />
        <Gadget />
        <Earn />
        <Games />
        <Apps />
        <News/>

    </main>
  );
};

export default Home;
