import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/button.md?raw";
import vueMd from "../md/vue/button.md?raw";
import vanillaMd from "../md/vanilla/button.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
