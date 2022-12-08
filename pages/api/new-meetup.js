// functions that contain server-side code
//  /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
  }
}

export default handler;
