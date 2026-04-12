import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/sheet.md?raw";
import vueMd from "../md/vue/sheet.md?raw";
import vanillaMd from "../md/vanilla/sheet.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
