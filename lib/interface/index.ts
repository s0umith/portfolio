export interface RootLayoutProps {
	children: React.ReactNode
}

export interface LoaderBgProps {
    setBgLoaded : React.Dispatch<React.SetStateAction<boolean>>;
}

export interface GalleryCardProps {
    heading : string
}

interface teamMemberType{
    name : string,
    photo : string,
    position : string,
    email : string,
    linkedin : string,
    instagram : string,
    fb  : string
}
export interface teamHeadType{
    data : {
        name : string,
        photo : string,
        position : string,
        email : string,
        linkedin : string,
    }
}

export interface TeamMemberCardProps{
    data : teamMemberType,
    head : boolean
}