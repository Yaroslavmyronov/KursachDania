import { Main } from "./Main";
import Header from '../components/header/Header';
import { ReputationsService } from "@/services/reputations.service";



const HomePage = async () => {
  const reputations = await ReputationsService.getAll();

  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <Main reputations={reputations} />
    </div>
  );
}

export default HomePage;
