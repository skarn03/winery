import CollectionHeading from "./Component/CollectionHeading/CollectionHeading";
import WineShowcase from "./Component/WineShowcase/WineShowcase";
import DarkWineShowcase from "./Component/DarkWineShowcase/DarkWineShowcase";
import Header from "../../Components/Header/Header";
export default function OurCollection() {
    return (
        <div>

            <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-[#FFFFE3]">

                <div className="snap-start h-screen flex items-center justify-center">
                    <CollectionHeading />
                </div>
                <div className="snap-start h-screen flex items-center justify-center">
                    <WineShowcase />
                </div>
                <div className="snap-start h-screen flex items-center justify-center">
                    <DarkWineShowcase />
                </div>
            </div>
        </div>
    );
}

