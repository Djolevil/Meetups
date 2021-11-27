import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
      <MeetupDetail 
           image='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG/1280px-Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG'
           title='First Meetup'
           address='Three Dogs NN, 22240 Sid'
           description='This is a first meetup'
      />
    );
};

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG/1280px-Шид_%28главна_улица%29_-_Šid_%28main_street%29.JPG',
        id: meetupId,
        title: 'First Meetup',
        address: 'Three Dogs NN, 22240 Sid',
        description: 'This is a first meetup',
      },
    },
  };
};

export default MeetupDetails;