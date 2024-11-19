export interface RootLayoutProps {
	children: React.ReactNode
}

export interface LoaderBgProps {
    setBgLoaded : React.Dispatch<React.SetStateAction<boolean>>;
}

export interface GalleryCardProps {
    heading : string
}

interface experienceDataType{
    internRole : string,
    companyName : string,
    period : string,
    imgLink : string,
    info : string,
    skills : string[]
}

interface projectDataType{
    heading : string,
    subHead : string,
    imgLink : string,
    period : string,
    info : string,
    skills : string[]
}


export interface ProjectCardProps{
    index : number,
    data : projectDataType
}

export interface ExperienceCardProps{
    index : number,
    data : experienceDataType
}
