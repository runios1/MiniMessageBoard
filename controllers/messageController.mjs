import { messages } from "../routes/index.mjs";

function getMessage(req, res) {
  const message = messages[req.query.id];
  res.render("message", {
    author: message.user,
    body: message.text,
    date: message.added,
  });
}

export default getMessage;
