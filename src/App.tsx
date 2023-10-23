import { Link } from 'react-router-dom';
import SearchSong from './components/SearchSong';
import CarouselPlaylist from './components/CarrouselPlaylist';
import CarouselDaily from './components/CarrouselDaily';
import KarokeBar from './components/KaraokeBar';
import Header from './components/Header';
import {
  FaArrowRight,
} from 'react-icons/fa'
import { useState } from 'react';
import Recommend from './components/Recommend';

function App() {
  const userFromLocalStorage = localStorage.getItem('user');
  const [user] = useState(userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null);

  if (!user) {
    // Redirecionar para a página de login se não houver informações de usuário
    return (
      <div>
        <p>Please <Link to="/">log in</Link></p>
      </div>
    );
  }


  return (
    <section className="bg-[#232323] text-white min-h-screen flex flex-col">
      <Header user={user} />
      <div className='mt-[100px] md:mt-[120px]'>
        <div className='flex w-full justify-center items-center'>
          <Recommend />
        </div>
        <SearchSong />
      </div>
      <div className='flex p-4 gap-3'>
        <div className="flex items-center  justify-center  bg-gradient-to-l from-violet-700 to-violet-800 w-1/3 py-2 rounded-md">
          <h1>Made for you</h1>
        </div>
        <div className="flex items-center  justify-center   bg-gradient-to-l from-neutral-700 to-zinc-800 w-1/3 py-2 rounded-md">
          <h1>Playlists</h1>
        </div>
        <div className="flex items-center justify-center  bg-gradient-to-l from-neutral-700 to-zinc-800 w-1/3 py-2 rounded-md">
          <h1>Bares</h1>
        </div>
      </div>
      <CarouselDaily />
      <div className='flex p-4 justify-between items-center text-2xl'>
        <p className='text-white'>Playlists</p>
        <Link to="/playlist" state={{ user }}>+</Link>
      </div>
      <CarouselPlaylist />
      <div className='p-4'>
        <p className='text-2xl w-full mb-4'>Bares abertos agora</p>
        <div className='flex flex-col md:flex-row md:justify-around'>
          <KarokeBar
            name='Bar do Delicio'
            description='Chopp em dobro em dias de karaoke
            Karaoke Terça e Quinta até 01:00
            Rodizio de chopp e aperitivos'
            imageUrl='https://images.adsttc.com/media/images/5e97/870c/b357/65ca/ec00/0f6c/newsletter/FEATURED.jpg?1586988796'
            avaliation='4,9'
            mapUrl='https://www.google.com.br/maps/preview'
            peoplesInside={21}
          />
          <KarokeBar
            name='Bar do Sonico'
            description='Chopp em dobro em dias de karaoke
            Karaoke Terça e Quinta até 01:00
            Rodizio de chopp e aperitivos'
            imageUrl='https://shows.net.br/wp-content/uploads/2023/01/bar-a-noite-em-florianopolis-1024x682.jpg'
            avaliation='4,9'
            mapUrl='https://www.google.com.br/maps/preview'
            peoplesInside={19}
          />
          <KarokeBar
            name='Bar do Sabugo'
            description='Chopp em dobro em dias de karaoke
            Karaoke Terça e Quinta até 01:00
            Rodizio de chopp e aperitivos'
            imageUrl='https://f.i.uol.com.br/fotografia/2022/06/10/165488099162a37adf33edc_1654880991_3x2_rt.jpg'
            avaliation='4,9'
            mapUrl='https://www.google.com.br/maps/preview'
            peoplesInside={11}
          />
        </div>
        <div className='flex p-4 rounded-md bg-gradient-to-l from-violet-700 to-violet-800 items-center justify-between my-2'>
          <button>See all opened karaoke’s in your region</button>
          <FaArrowRight />
        </div>
      </div>

    </section >
  );
}

export default App;
