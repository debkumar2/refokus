import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='w-full mt-14'>
            <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
                <Card width = {'basis-1/3'} isHeading = {false} para = {true} subheading= 'Up Next: Culture' heading={'Who we are'} smallText={'Explore what drives our team.'}/>
                <Card width = {'basis-2/3'} isHeading={true} para = {false} hover={true} subheading= 'Get in Touch' heading={"Let's get to it, together."} bigText={'Start a Project'}/>
            </div>
        </div>
    )
}

export default Cards
