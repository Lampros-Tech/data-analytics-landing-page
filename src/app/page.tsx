// import Header from '@/Component/Header/Header';
import Button from '@/Component/UI/button';
import Image from 'next/image';
import component from '@/assets/images/Homepage/component.svg'
import HomePage from '@/Component/HomePage/HomePage';
import TeamsWork from '@/Component/HomePage/TeamsWork';
import SolvingProblem from '@/Component/HomePage/SolvingProblem';
import Works from '@/Component/HomePage/Works';
export default function Home() {
  return (
    <div className='bg-[#030908] pt-4'>
     <HomePage />
     <TeamsWork/>
     <SolvingProblem/>
     <Works/>
    </div>
  );
}
