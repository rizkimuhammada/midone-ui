import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/alert.md?raw";
import vueMd from "../md/vue/alert.md?raw";
import vanillaMd from "../md/vanilla/alert.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
