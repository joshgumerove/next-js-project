import React from "react";
import { getStaticProps } from "..";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      }
      title={"A First Meetup"}
      address={"Some Street 5, Some City"}
      description={"The meetup description"}
    />
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   // note need a way to identify meetup since dynamic page
//   // cannot use useRouter in this function
//   const meetupId = context.params.meetupId;
//   console.log("what is this....", meetupId);
//   return {
//     props: {
//       meetupData: {
//         meetupId: meetupId,
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",

//         title: "A First Meetup",
//         address: "Some Street 5, Some City",
//         description: "The meetup description",
//       },
//     },
//   };
// }

export default MeetupDetails;
