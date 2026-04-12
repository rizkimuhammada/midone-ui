import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/checkbox.md?raw";
import vueMd from "../md/vue/checkbox.md?raw";
import vanillaMd from "../md/vanilla/checkbox.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
