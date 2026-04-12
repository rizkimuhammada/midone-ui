import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/menu.md?raw";
import vueMd from "../md/vue/menu.md?raw";
import vanillaMd from "../md/vanilla/menu.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
