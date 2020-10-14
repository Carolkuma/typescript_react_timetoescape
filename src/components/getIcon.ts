import {
    faRoute,
    faUserFriends, 
    faGift,
    faPhone,
      IconDefinition,
    } from "@fortawesome/free-solid-svg-icons";
    import { faBuilding, faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons"
    import { faFacebookSquare, faInstagramSquare, faTripadvisor } from '@fortawesome/free-brands-svg-icons'
  
  
  enum ICONS {
    faRoute = "faRoute",
    faUserFriends = "faUserFriends",
    faGift = "faGift",
    faBuilding = "faBuilding",
    faFacebookSquare= "faFacebookSquare",
    faInstagramSquare = "faInstagramSquare",
    faTripadvisor = "faTripadvisor",
    faPhone = "faPhone",
    faEnvelope = "faEnvelope",
    faClock = "faClock"
  }
  
  type AvaiableIcons = {
    [key in ICONS]: IconDefinition;
  }
  
  const avaiableIcons: AvaiableIcons = {
    faRoute,
    faUserFriends,
    faGift,
    faBuilding,
    faFacebookSquare,
    faInstagramSquare,
    faTripadvisor,
    faPhone,
    faEnvelope,
    faClock
  }
  
  export const getIcon = (icon: string): IconDefinition | never => {
    if (avaiableIcons[icon]) {
      return avaiableIcons[icon]
    }
    throw new Error('Icon not found')
  }