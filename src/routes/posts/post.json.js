// Server side route
//  http://localhost:3000/post.json

// Import DB from DB

export async function get({ params }) {
  // db.collection.find()
  //  data

  return {
    status: 200,
    body: {
      data: "test"
    }
  }
}
