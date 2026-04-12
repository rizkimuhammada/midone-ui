import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/tabs.md?raw";
import vueMd from "../md/vue/tabs.md?raw";
import vanillaMd from "../md/vanilla/tabs.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
