import HomePage from '@/Component/HomePage/HomePage';
import TeamsWork from '@/Component/HomePage/TeamsWork';
import SolvingProblem from '@/Component/HomePage/SolvingProblem';
import Works from '@/Component/HomePage/Works';
import WhyItWorks from '@/Component/HomePage/WhyItWorks';
import FAQS from '@/Component/HomePage/FAQS';
import Footer from '@/Component/HomePage/Footer';
export default function Home() {
  return (
    <div className='bg-[#030908] pt-4'>
     <HomePage />
     <TeamsWork/>
     <SolvingProblem/>
     <Works/>
     <WhyItWorks/>
     <FAQS/>
     <Footer/>
    </div>
  );
}
