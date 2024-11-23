import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a prompt to share with the community and get creative responses.
        You can add a tag to help categorize your prompt.
      </p>
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semibold">Propmt</span>
          <textarea
            name=""
            id=""
            className="form_textarea"
            value={post.prompt}
            onChange={(e) =>
              setPost((prev) => {
                return { ...prev, prompt: e.target.value };
              })
            }
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold">Tags</span>
          <input
            name=""
            id=""
            className="form_input"
            value={post.tag}
            onChange={(e) =>
              setPost((prev) => {
                return { ...prev, tag: e.target.value };
              })
            }
            placeholder="e.g. #story, #poem, #dialogue"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500 text-sm" href="/">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
