

const Feature = (props) => {
    return (
        <div className='featureContainer'>
            <img src={props.imgSrc} alt={props.alt} className='featureIcon' />
            <h3 className="featureHeadText fontHeadnCTAs">{props.featureHeadText}</h3>
            <p className="featurePtext fontBody">{props.featurePtext}</p>
        </div>
    )
}

export default Feature
