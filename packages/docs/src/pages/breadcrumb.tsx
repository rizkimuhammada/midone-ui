import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/breadcrumb.md?raw";
import vueMd from "../md/vue/breadcrumb.md?raw";
import vanillaMd from "../md/vanilla/breadcrumb.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
