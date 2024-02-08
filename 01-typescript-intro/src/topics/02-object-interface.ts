const skills: string[] = ['Dash', 'Attack', 'Heal'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const cloud:Character = {
    name: 'Cloud Strife',
    hp: 100,
    skills,

}

cloud.hometown = 'Midgard';

console.table(cloud);

export {}