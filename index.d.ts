const { Client } = require("@notionhq/client");

declare module "vue/types/vue" {
  interface Vue {
    $notion: typeof Client;
  }
}
