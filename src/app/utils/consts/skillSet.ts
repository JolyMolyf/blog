export interface ISkillSetItem {
    title: string;
    subTitle?: string;
    description?: string;
}

export const skillSet: Array<ISkillSetItem> = [
    { title: 'TS' },
    { title: 'React' },
    { title: 'Next.Js' },
    { title: 'Scss' },
    { title: '5', subTitle: 'Years', description: 'experience'  },
    { title: '10+', description: 'Projects' }
]