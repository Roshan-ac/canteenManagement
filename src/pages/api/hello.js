// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("hello");
  res.status(200).json({ name: "John Doe" });
  // console.log(req.method)
  if (req.method == "POST") {
    console.log("Iam post");
  }
  if (req.method == "GET") {
    console.log("Iam get");
  }
}
