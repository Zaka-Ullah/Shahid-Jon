export interface SubMenuItem {
  title: string;
  url?: string;    
  id:number,
  isFavourite?: boolean;  

  menuItems?: SubMenuItem[];
}

export interface MenuItem {
  title: string;
  icon: string;         
  id:number,
  subTitle?: string;            

  menuItems: SubMenuItem[];
}

export interface Tips {
  title: string;   
  id:number,
  
  menuItems: SubMenuItem[];
}

export interface BigObject {
  id: number;
  title: string;
  titleBackgroundColor: string;
  contentBackgroundColor: string;
  guideSubject: string;    
  guideSubTitle?:string;
  guideTitle: string;
  guideIcon: string;
  guideButtonText: string;
  guideButtonBg: string;
  icon: string;
  tips: Tips;
  menuItems: MenuItem[];
}