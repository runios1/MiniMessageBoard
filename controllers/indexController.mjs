import { messages } from "../routes/index.mjs";
function getIndex(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

export default getIndex;
