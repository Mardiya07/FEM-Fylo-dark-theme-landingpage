import iconAccessAnywhere from '../images/icon-access-anywhere.svg'
import iconAnyFile from '../images/icon-any-file.svg'
import iconCollaboration from '../images/icon-collaboration.svg'
import iconSecurity from '../images/icon-security.svg'
import stayProductive from '../images/illustration-stay-productive.png'
import iconArrow from '../images/icon-arrow.svg'
// import iconEmail from '../images/icon-email.svg'
// import iconLocation from '../images/icon-location.svg'
// import iconPhone from '../images/icon-phone.svg'




export const navLinks=[
    {
        name:'Features',
        url:'##'
    },
    {
        name:'Team',
        url:'##'
    },
    {
        name:'Sign In',
        url:'##'
    }
]
export const body={ 
    
   intro: {
        introText:'All your files in one secure location, accessible anywhere.',
        introPgraph:'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.',
    }
}
export const cta={
    btnGetStarted:{
        text:'Get Started',
        url:'##'
    }
}

export const feature=[
    {
        id:1,
        imgSrc:iconAccessAnywhere,
        alt:'desktop computer icon',
        featureHeadText:'Access your files, anywhere',
        featurePtext:'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'

    },
    {
        id:2,
        imgSrc:iconSecurity,
        alt:'crest icon with a check mark symbol',
        featureHeadText:'Security you can trust',
        featurePtext:'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
        id:3,
        imgSrc:iconCollaboration,
        alt:'icon of a check mark on a circle clock outline with people illustration',
        featureHeadText:'Real-time collaboration',
        featurePtext:'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
        id:4,
        imgSrc:iconAnyFile,
        alt:'icon with a folder notepad and a landscape illustration',
        featureHeadText:'Store any type of file',
        featurePtext:'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
      }
      
    
]
export const icons={
        iconArrow, 
    }

export const extraFeature={ 
   extra: {
        illustration:stayProductive,
        heading:'Stay productive, wherever you are',
        paragraph1:'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.',
        paragraph2:'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
        linkText:'See how Fylo works'
        // iconArrow:iconArrow
    }
}