// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let {id} = req?.query
  console.log('req?.body', req)
  if (req?.method === "GET") {
    try {
      const response = await (
        await fetch("https://service.pace-unv.cloud/api/notes")
      ).json();
      res.status(200).json({
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error Server!",
      });
    }
  } else if (req?.method === "POST") {
    try {
      const response = await (
        await fetch("https://service.pace-unv.cloud/api/notes", {
          body: JSON.stringify(req?.body),
          headers: {
            "Content-Type": "application/json",
          },
          method: req?.method,
        })
      ).json();
      res.status(200).json({
        message: response.message,
        // data: response.data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error Server!",
      });
    }
  }
}
