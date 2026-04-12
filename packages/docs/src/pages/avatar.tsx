import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/avatar.md?raw";
import vueMd from "../md/vue/avatar.md?raw";
import vanillaMd from "../md/vanilla/avatar.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
