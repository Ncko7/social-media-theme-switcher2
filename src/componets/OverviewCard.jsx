import facebookLogo from '../assets/img/icon-facebook.svg'
import twitterLogo from '../assets/img/icon-twitter.svg'
import instagramLogo from '../assets/img/icon-instagram.svg'
import youtubeLogo from '../assets/img/icon-youtube.svg'
import iconUp from '../assets/img/icon-up.svg'
import iconDown from '../assets/img/icon-down.svg'

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

const networkColors = {
    Facebook: 'bg-facebook',
    Twitter: 'bg-twitter',
    Instagram: 'bg-instagram',
    YouTube: 'bg-youtube'
}


export const OverviewCard = ({user, audiencieType, audience, network, isUp, today}) => {

  return (
    <article className="bg-lightGrayishBlueCard w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center dark:bg-darkDesaturatedBlueCard hover:brightness-95 cursor-pointer hover:dark:brightness-125">
        <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
        <div className='flex items-center place-content-center gap-2'>
          <img src={networkLogos[network]} alt={`logo ${network}`} />
          <p className='texto-xs text-darkGrayishBlueText font-bold'>{user}</p>
        </div>
        <p className='text-[56px] font-bold text-veryDarkBlueBg dark:text-whiteText'>{audience}</p>
        <p className='uppercase tracking-[5px] text-darkGrayishBlueText text-xs mb-6'>{audiencieType}</p>
        <div className='flex items-center place-content-center gap-1 '>
          <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
          <p className={`text-xs font-bold ${isUp ? 'text-limeGreen' : 'text-brightRed'}`}>{today} Today</p>
        </div>
        
    </article>
  )
}

export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
  return (
    <article className='bg-lightGrayishBlueCard w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 dark:bg-darkDesaturatedBlueCard hover:dark:brightness-125'>
      <div className='flex items-center justify-between'>
        <p className='text-darkGrayishBlueText'>{statsType}</p>
        <img src={networkLogos[network]} alt="Network Logos" />
      </div>
      <div className='flex justify-between '>
        <p className='text-[42px] font-bold text-veryDarkBlueBg dark:text-white'>{stats}</p>
        <div className='flex items-center place-content-center gap-1 '>
          <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
          <p className={`text-xs font-bold ${isUp ? 'text-limeGreen' : 'text-brightRed'}`}>{porcentage} Today</p>
        </div>
      </div>
    </article>
  )
}
