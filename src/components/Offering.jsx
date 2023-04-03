import { Link } from "react-router-dom";
import offering1 from '../assets/offering-1.png'
import offering2 from '../assets/offering-2.png'
import offering3 from '../assets/offering-3.png'
import OfferingCard from "./OfferingCard" ;
import { useContext, useState } from "react";
import { Context } from "../Context";

export default function Offering({id}) {
    const {screenWidth}  = useContext(Context)
    const [selected, setSelected] = useState(2);
    const cardDetail = [
        {
            img: offering1,
            heading:"Background verification",
            content:"Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..."
        },
        {
            img: offering2,
            heading:"Vertual site visit",
            content:"It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
        },
        {
            img: offering3,
            heading:"Title diligence",
            content:"Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
        }
    ]
    return (
        <div className="px-20 " id={id}>
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-3xl font-semibold text-center border-b-4 border-primary w-fit h-12 rounded ">Our offering</h1>
                <p className="">This whole purchase journey can be divided into three stages. For more details,
                    <Link className="text-primary font-semibold mx-1">Click Here</Link>
                </p>
            </div>

            <div className="grid grid-cols-3 my-5 gap-7">
                <div className="flex flex-col gap-5 px-4">
                    <div className={`bg-gray-200 h-16 px-10 text-${screenWidth<1000 ?'sm':'lg'} font-semibold text-center py-3 flex gap-3 items-center justify-center ${selected === 1 && "border-b-4 border-primary bg-gray-400"}`} role="button" onClick={()=> setSelected(1)}>
                        <div className="h-8 w-8 rounded-full bg-white text-center text-lg">1</div>
                        <div>Pre-booking</div>
                    </div>
                    <OfferingCard type="offering" element={cardDetail[0].img} heading={cardDetail[0].heading} content={cardDetail[0].content}/>
                </div>
                <div className="flex flex-col gap-5 px-4">
                    <div className={`bg-gray-200 h-16 px-10text-${screenWidth<1000 ?'sm':'lg'} font-semibold text-center py-3 flex gap-3 items-center justify-center ${selected === 2 && "border-b-4 border-primary bg-gray-400"}`} role="button" onClick={()=> setSelected(2)}>
                        <div className="h-8 w-10 rounded-full bg-white text-center text-lg">2</div>
                        <div>Post-Booking & Pre-Registration</div>
                    </div>
                    <OfferingCard type="offering" element={cardDetail[1].img} heading={cardDetail[1].heading} content={cardDetail[1].content}/>
                </div>
                <div className="flex flex-col gap-5 px-4">
                    <div className={`bg-gray-200 h-16 px-10 text-${screenWidth<1000 ?'sm':'lg'} font-semibold text-center py-3 flex gap-3 items-center justify-center ${selected === 3 && "border-b-4 border-primary bg-gray-400"}`} role="button" onClick={()=> setSelected(3)}>
                        <div className="h-8 w-8 rounded-full bg-white text-center text-lg">3</div>
                        <div>Pos-Registration</div>
                    </div>
                    <OfferingCard type="offering" element={cardDetail[2].img} heading={cardDetail[2].heading} content={cardDetail[2].content}/>
                </div>
            </div>

        </div >
    )
}