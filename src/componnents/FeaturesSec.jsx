import React from 'react'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import DiamondIcon from '@mui/icons-material/Diamond';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
export const FeaturesSec = () => {
    const fes=[
  {
    "icon": <LocalPoliceIcon />,
    "heading": "Superior Protection",
    "description": "Our high-performance PPF provides unmatched resistance against scratches, stone chips, and environmental damage, keeping your car's paint flawless."
  },
  {
    "icon": <DiamondIcon />,
    "heading": "Crystal Clear Finish",
    "description": "Designed for optical clarity, our film enhances your vehicle's appearance with an ultra-clear, glossy finish that maintains the original paint color and shine."
  },
  {
    "icon": <MilitaryTechIcon />,
    "heading": "Warranty",
    "description": "Enjoy peace of mind with up to 10 years of warranty coverage, ensuring long-lasting performance and protection against yellowing, cracking, or peeling."
  }
    ]




  return (
    <div>
        <section className='bg-black text-white text-center'>
            <h1 className='p-5 text-[clamp(1.2rem,2.5vw,2rem)] font-bold '>Why Choose Us</h1>
            <div className=' p-5 flex flex-wrap '>
                {fes.map((fes, index) => (
                    <div key={index} className=' m-5 border-1 rounded-b-sm flex-1 min-w-[250px]'>
                        <div className=' m-5 text-5xl '>{fes.icon}</div>
                        <h1 className=' m-5 text-3xl font-semibold'>{fes.heading}</h1>
                        <p className=' m-5 text-neutral-600 text-[clamp(0.9rem,2.5vw,1.2rem)]'>{fes.description} </p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
