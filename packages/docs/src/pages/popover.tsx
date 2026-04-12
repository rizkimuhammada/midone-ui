import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/popover.md?raw";
import vueMd from "../md/vue/popover.md?raw";
import vanillaMd from "../md/vanilla/popover.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
