import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/textarea.md?raw";
import vueMd from "../md/vue/textarea.md?raw";
import vanillaMd from "../md/vanilla/textarea.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
