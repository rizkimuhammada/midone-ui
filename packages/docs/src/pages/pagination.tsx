import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/pagination.md?raw";
import vueMd from "../md/vue/pagination.md?raw";
import vanillaMd from "../md/vanilla/pagination.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
