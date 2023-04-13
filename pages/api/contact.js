import axios from "axios"

export default async function handler(req, res) {
  await axios.post(process.env.SLACK_WEBHOOK_URL,
             req.body,
             {
              headers: {
                'Content-type': 'application/json'
              }
            })
        .then( function(response) {
          res.status(200).json({ status: 'Success' })
        })
        .catch(  function(error){
          console.log(error)
          res.status(500).json({ error })
        })
} 