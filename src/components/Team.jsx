import { Link } from "react-router-dom";

import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import OfferingCard from "./OfferingCard";
import { useState } from "react";

export default function Team({id}) {

    const cardDetail = [
        {
            img: team1,
            heading:"Brajesh Pathak",
            content:"A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been..."
        },
        {
            img: team2,
            heading:"Deeepak Shukla",
            content:"Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India."
        },
        {
            img: team3,
            heading:"Alok Kumar Singh",
            content:"Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital."
        }
    ]
    return (
        <div className="px-20 " id={id}>
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-3xl font-semibold text-center border-b-4 border-primary w-fit h-12 rounded ">Our team members</h1>
            </div>

            <div className="grid grid-cols-3 my-5 gap-7">
                <div className="flex flex-col gap-5 px-4">
                    <OfferingCard element={cardDetail[0].img} heading={cardDetail[0].heading} content={cardDetail[0].content} type="team"/>
                </div>
                <div className="flex flex-col gap-5 px-4">
                    <OfferingCard element={cardDetail[1].img} heading={cardDetail[1].heading} content={cardDetail[1].content} type="team"/>
                </div>
                <div className="flex flex-col gap-5 px-4">
                    <OfferingCard element={cardDetail[2].img} heading={cardDetail[2].heading} content={cardDetail[2].content} type="team"/>
                </div>
            </div>

        </div >
    )
}