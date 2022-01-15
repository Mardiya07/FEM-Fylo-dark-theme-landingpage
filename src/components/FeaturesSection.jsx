import Feature from "./navigation/Feature"
import { feature } from "../data/content"



const FeaturesSection = () => {
    return (
        <div className='featuresSection'>
            {
                feature.map((item)=>{
                    return(

                        <Feature key={item.id} imgSrc={item.imgSrc} alt={item.alt} featureHeadText={item.featureHeadText} featurePtext={item.featurePtext}
                        />
                    )
                })
            }
        </div>
    )
}

export default FeaturesSection
