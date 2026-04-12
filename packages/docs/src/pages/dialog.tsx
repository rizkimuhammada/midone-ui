import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/dialog.md?raw";
import vueMd from "../md/vue/dialog.md?raw";
import vanillaMd from "../md/vanilla/dialog.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
