const { Client } = require("@notionhq/client");

export default (context, inject) => {
  const notion = new Client(<%= JSON.stringify(options, null, 2) %>)
  inject("notion", notion);
};
