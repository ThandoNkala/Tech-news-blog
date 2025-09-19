import Banner from '../Comps/Banner';
import Round from '@/Comps/Round';
import EditorPick from '@/Comps/Editor-pick';
import HomePage from '@/Comps/posts'

const Home = () => {
  return (
     <main>
       <Round />
       <Banner />
       <HomePage />
       <EditorPick />
    </main>
  );
};

export default Home;
