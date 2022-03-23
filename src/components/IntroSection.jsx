import { body,cta } from "../data/content"
import IntroIllustration from "../images/illustration-intro.png"
const IntroSection = (props) => {
    return (
        <div className='introSection'>
            
        <img className='introIllus' src={IntroIllustration} alt=" introduction illustration" />
        <h1 className='introText fontHeadnCTAs'>{body.intro.introText}</h1>
        <p className="introPgraph fontBody">{body.intro.introPgraph}</p>
        <a href={cta.btnGetStarted.url} className='ctaGetStarted fontHeadnCTAs'>{cta.btnGetStarted.text}</a>
       </div>
       
    )
}

export default IntroSection
 