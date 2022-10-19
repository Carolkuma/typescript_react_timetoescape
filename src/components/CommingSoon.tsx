import "twin.macro";
import { Container } from "./shared/Container";

const style = {
  backgroundImage: `url("intro-bg.jpg")`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  minHeight: `calc(100vh - 9.1rem)`,
};

export const CommingSoon = () => (
  <section tw="py-20" style={style}>
    <Container tw="lg:flex">
      <div tw="text-center flex-1 lg:w-1/2">
        <h1 tw="text-4xl lg:text-4xl xl:text-6xl leading-none alt-font">
          Nezabudnuteľný zážitok
        </h1>
        <p tw="text-xl lg:text-2xl mt-6 font-light">
          Zaži dobrodružstvo spolupracuj a unikni. Už čoskoro otvárame.
        </p>
        <p tw="mt-8 md:mt-12"></p>
      </div>
    </Container>
  </section>
);
