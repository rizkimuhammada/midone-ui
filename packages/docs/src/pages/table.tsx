import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/table.md?raw";
import vueMd from "../md/vue/table.md?raw";
import vanillaMd from "../md/vanilla/table.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
