import { Left } from "@/assets/icons/Left"
import { LandingCards } from "./LandingCards"
import { Right } from "@/assets/icons/Right"

export const Landing = ({articles}) =>{
    return (
        <div>
            {articles.map({})}
            <div className="flex justify-center gap-2 lg:justify-end">
                <Left/>
                <Right/>
            </div>
        </div>
    )
}