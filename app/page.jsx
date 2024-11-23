import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        {/* generate 50 lorem ipsum words */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
        eget sapien. Nullam nec purus nec nunc ultricies tincidunt. Nullam
      </p>
      <Feed />
    </section>
  );
};

export default Home;
