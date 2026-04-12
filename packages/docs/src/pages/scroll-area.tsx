import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/scroll-area.md?raw";
import vueMd from "../md/vue/scroll-area.md?raw";
import vanillaMd from "../md/vanilla/scroll-area.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
