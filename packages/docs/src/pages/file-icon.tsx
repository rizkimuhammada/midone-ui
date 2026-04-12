import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/file-icon.md?raw";
import vueMd from "../md/vue/file-icon.md?raw";
import vanillaMd from "../md/vanilla/file-icon.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
