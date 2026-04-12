import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/data-table.md?raw";
import vueMd from "../md/vue/data-table.md?raw";
import vanillaMd from "../md/vanilla/data-table.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
