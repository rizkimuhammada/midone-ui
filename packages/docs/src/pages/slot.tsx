import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/slot.md?raw";
import vueMd from "../md/vue/slot.md?raw";
import vanillaMd from "../md/vanilla/slot.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
