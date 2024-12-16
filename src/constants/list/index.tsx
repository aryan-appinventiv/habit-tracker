import { ImageSourcePropType } from 'react-native';
import { images } from '../../assets/images';
import { colors } from '../../utils/colors';

export interface Item {
  id: number | string;
  name: string;
  img?: ImageSourcePropType; 
  icon: ImageSourcePropType;
}


export interface HabitType extends Item {
  clr: string; 
}

export interface MoreHabitType extends Item {
  desc: string; 
}

export const items: Item[] = [
  {
    id: 1,
    name: 'Personal Infos',
    img: images.right,
    icon: images.personal,
  },
  {
    id: 2,
    name: 'Dark Mode',
    icon: images.darkmode,
  },
  {
    id: 3,
    name: 'Notifications',
    img: images.right,
    icon: images.notifications,
  },
  {
    id: 4,
    name: 'Security',
    img: images.right,
    icon: images.security,
  },
  {
    id: 5,
    name: 'Language',
    img: images.right,
    icon: images.language,
  },
];

export const aboutItems: Item[] = [
  {
    id: 1,
    name: 'About',
    img: images.right,
    icon: images.about,
  },
  {
    id: 2,
    name: 'Rate Us',
    img: images.right,
    icon: images.rate,
  },
  {
    id: 3,
    name: 'Support',
    img: images.right,
    icon: images.support,
  },
];

export const habitCategories: HabitType[] = [
  {
    id: '1',
    name: 'Sports',
    img: images.right,
    icon: images.sports,
    clr: colors.cat1,
  },
  {
    id: '2',
    name: 'Social life',
    img: images.right,
    icon: images.social,
    clr: colors.cat2,
  },
  {
    id: '3',
    name: 'Learning',
    img: images.right,
    icon: images.learning,
    clr: colors.cat3,
  },
  {
    id: '4',
    name: 'Finance',
    img: images.right,
    icon: images.finance,
    clr: colors.cat4,
  },
  {
    id: '5',
    name: 'Be healthy',
    img: images.right,
    icon: images.healthy,
    clr: colors.cat5,
  },
  {
    id: '6',
    name: 'Better sleep',
    img: images.right,
    icon: images.sleep,
    clr: colors.cat6,
  },
];

export const SportsHabitCategories: MoreHabitType[] = [
  {
    id: 1,
    name: 'Running',
    img: images.right,
    icon: images.sports,
    desc: 'Move forward',
  },
  {
    id: 2,
    name: 'Exercises',
    img: images.right,
    icon: images.sports,
    desc: 'Power up and move',
  },
  {
    id: 3,
    name: 'Yoga',
    img: images.right,
    icon: images.sports,
    desc: 'Find your balance',
  },
  {
    id: 4,
    name: 'Swimming',
    img: images.right,
    icon: images.sports,
    desc: 'Ride the waves',
  },
  {
    id: 5,
    name: 'Cycling',
    img: images.right,
    icon: images.sports,
    desc: 'Explore new horizons',
  },
  {
    id: 6,
    name: 'Dancing',
    img: images.right,
    icon: images.sports,
    desc: 'Surrender to the movement',
  },
  {
    id: 7,
    name: 'Gym',
    img: images.right,
    icon: images.sports,
    desc: 'Strength is within you',
  },
  {
    id: 8,
    name: 'Climbing',
    img: images.right,
    icon: images.sports,
    desc: 'Reach new heights',
  },
  {
    id: 9,
    name: 'Ballet',
    img: images.right,
    icon: images.sports,
    desc: 'Find your elegance',
  },
  {
    id: 10,
    name: 'Riding',
    img: images.right,
    icon: images.sports,
    desc: 'Connect with nature',
  },
];



export const SocialHabitCategories: MoreHabitType[] = [
  {
    id: 1,
    name: 'Meeting friends',
    img: images.right,
    icon: images.sports,
    desc: 'Enhance social life',
  },
  {
    id: 2,
    name: 'Visiting Relatives',
    img: images.right,
    icon: images.sports,
    desc: 'Building relations',
  },
];

export const LearningHabitCategories: MoreHabitType[] = [
  {
    id: 1,
    name: 'Reading',
    img: images.right,
    icon: images.sports,
    desc: 'Enhance social life',
  },
  {
    id: 2,
    name: 'Research',
    img: images.right,
    icon: images.sports,
    desc: 'Building relations',
  },
];

export const FinanceHabitCategories: MoreHabitType[] = [
  {
    id: 1,
    name: 'Investing',
    img: images.right,
    icon: images.sports,
    desc: 'Enhance social life',
  },
  {
    id: 2,
    name: 'Checking Policies and Funds',
    img: images.right,
    icon: images.sports,
    desc: 'Building relations',
  },
];

export const HealthyHabitCategories: MoreHabitType[] = [
  {
    id: 1,
    name: 'Morning walk',
    img: images.right,
    icon: images.sports,
    desc: 'Enhance social life',
  },
  {
    id: 2,
    name: 'Eating fruits',
    img: images.right,
    icon: images.sports,
    desc: 'Building relations',
  },
];

export const SleepHabitCategories: MoreHabitType[] = [
  {
    id: 1,
    name: 'Ensure to take a bath',
    img: images.right,
    icon: images.sports,
    desc: 'Enhance social life',
  },
  {
    id: 2,
    name: 'Silent phones',
    img: images.right,
    icon: images.sports,
    desc: 'Building relations',
  },
];


export const day = [
  {show: 'S', id: '7', dayy: 'SUN' },
  {show: 'M', id: '1', dayy: 'MON'},
  {show: 'T', id: '2', dayy: 'TUE'},
  {show: 'W', id: '3', dayy: 'WED'},
  {show: 'T', id: '4', dayy: 'THU'},
  {show: 'F', id: '5', dayy: 'FRI'},
  {show: 'S', id: '6', dayy: 'SAT'},
];


