import data  from '../../data/data.json' 
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberToK = (number) => {
  if(number >= 10000){
    number = number / 1000
    return `${number}k`
  }
  return number
}

export const OverViewContainer = () => {

  return (
   <section className=' max-w-[1490px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto'>
    {
      data.overview.map(object => 
        <OverviewCard 
          key={object.id} 
          user={object.user}
          audiencieType={object.audiencieType}
          audience={convertNumberToK(object.audience)}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
        />
      )
    }
   </section>
  )
}


export const OverViewTodayContainer = () => {
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-6 text-darkGrayishBlueText dark:text-veryPaleBlueTopBg'>Overview Today</h2>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {
        data['overview-today'].map(object => 
          <OverviewTodayCard 
            key={object.id} 
            network={object.network}
            statsType={object.statsType}
            stats={convertNumberToK(object.stats)}
            porcentage={object.porcentage}
            isUp={object.isUp}
          />
        )
      }
    </div>
    </section>
   
  )
}
