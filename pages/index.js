import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG/1280px-Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG',
        address: 'Three Dogs NN, 22240 Sid',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG/1280px-Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG',
        address: 'Three Dogs NN, 22240 Sid',
        description: 'This is a second meetup!',
    }
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
};

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    
    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
};
// export async function getStaticProps() {
//     //fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     };
// };

export default HomePage;