import { messages } from "../routes/index.mjs";
function getForm(req, res) {
  res.render("form");
}

function postNewMessage(req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
}

export { postNewMessage };
export default getForm;
