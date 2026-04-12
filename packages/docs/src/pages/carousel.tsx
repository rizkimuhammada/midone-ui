import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/carousel.md?raw";
import vueMd from "../md/vue/carousel.md?raw";
import vanillaMd from "../md/vanilla/carousel.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
