import { useState, useEffect } from "react"

export const Header = () => {

  const [dark, setDark] = useState(false)

  const handleClick = () => {
    setDark(!dark)
  }

  useEffect(() => {
    if(dark){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="bg-veryPaleBlueTopBg dark:bg-veryDarkBlueBg h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[480px] xl:mb-[200px]">
        <h1 className="text-veryDarkBlueText dark:text-veryPaleBlueTopBg text-2xl font-bold mb-1 ">Social Media Dashboard</h1>
        <p className="text-darkGrayishBlueText dark:text-desaturatedBlueText font-bold mb-6">Total Followers: 23,004</p>
        <hr className="bg-black mb-[19px]"/>
        <div className="flex items-center justify-between">
            <p className="text-darkGrayishBlueText dark:text-desaturatedBlueText font-bold">Dark Mode</p>
            <label htmlFor="darkmode" className="border relative bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px]">
                <input onClick={handleClick} type="checkbox" name="" id="darkmode" className="peer sr-only"/>
                <div className=" w-full h-full peer-checked:bg-toggle absolute top-0 left-0 "></div>
                <div className="w-[18px] h-[18px] bg-lightGrayishBlueCard rounded-full peer-checked:translate-x-[24px] transition-all"></div>
            </label>
        </div>
    </header>
  )
}
