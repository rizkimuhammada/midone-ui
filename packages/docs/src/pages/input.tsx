import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/input.md?raw";
import vueMd from "../md/vue/input.md?raw";
import vanillaMd from "../md/vanilla/input.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
