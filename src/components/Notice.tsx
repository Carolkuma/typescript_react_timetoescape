import notice from "../../content/home/notice.json";
import { MainPageSection } from "./shared/MainPageSection";
import "twin.macro";
const { title, description, rules } = notice;

const getItemClass = (index: number, length: number) =>
  `${"ml-8 pl-2"}  ${index !== length - 1 ? "mb-2" : ""}`;

export const Notice = () => (
  <MainPageSection id="koronavirus" tw="py-10 text-center">
    <h2 tw="text-3xl lg:text-4xl px-3" className="alt-font">
      {title}
    </h2>
    <div tw="mt-10  lg:w-2/3 mx-auto text-center">
      <p tw="md:text-lg">{description}</p>
      <ol type="1" tw="mt-10 md:text-lg" className="ol-rules">
        {rules.map((v, i, a) => (
          <li className={getItemClass(i, a.length)} key={i}>
            {v}
          </li>
        ))}
      </ol>
    </div>
  </MainPageSection>
);
