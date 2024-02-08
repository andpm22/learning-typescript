interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Benita la la",
    details: {
        author: 'Canaco',
        year: 2024,
    }
}

const { details:{author, year}, songDuration:duration } = audioPlayer;



// const {author, year} = details;
console.log(author, duration);

const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];
const [p1, p2, p3, p4 = 'Not found'] = dbz;
console.log(p4);

