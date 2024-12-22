// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { id } = req?.query;
  console.log('idid', id)
  if (req?.method === "DELETE") {
    try {
      const response = await (
        await fetch(`https://service.pace-unv.cloud/api/notes/delete/${id}`, {
          method: req?.method,
        })
      ).json();
      res.status(200).json({
        message: response.message,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error Server!",
      });
    }
  } else if (req?.method === "GET") {
    try {
      const response = await (
        await fetch(` https://service.pace-unv.cloud/api/notes/${id}`, {
          method: req?.method,
        })
      ).json();
      res.status(200).json({
        message: response.message,
        data: response?.data,
      });
    } catch (error) {}
  } else if (req?.method === "PATCH") {
    try {
      const response = await (
        await fetch(`https://service.pace-unv.cloud/api/notes/update/${id}`, {
          body: JSON.stringify(req?.body),
          headers: {
            "Content-Type": "application/json",
          },
          method: req?.method,
        })
      ).json();
      console.log('response',response)
      res.status(200).json({
        message: response.message,
        // data: response.data,
      });
    } catch (error) {
      console.log('error',error)
      res.status(500).json({
        message: "Error Server!",
      });
    }
  }
}
