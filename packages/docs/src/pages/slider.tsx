import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/slider.md?raw";
import vueMd from "../md/vue/slider.md?raw";
import vanillaMd from "../md/vanilla/slider.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
