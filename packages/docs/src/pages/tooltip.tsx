import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/tooltip.md?raw";
import vueMd from "../md/vue/tooltip.md?raw";
import vanillaMd from "../md/vanilla/tooltip.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
