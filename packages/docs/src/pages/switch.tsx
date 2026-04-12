import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/switch.md?raw";
import vueMd from "../md/vue/switch.md?raw";
import vanillaMd from "../md/vanilla/switch.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
