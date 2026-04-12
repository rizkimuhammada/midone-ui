import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/box.md?raw";
import vueMd from "../md/vue/box.md?raw";
import vanillaMd from "../md/vanilla/box.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
